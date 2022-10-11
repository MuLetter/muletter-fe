import { uploadProfile } from "@api";
import { authState } from "@store/atom";
import { white } from "@styles/color";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useRecoilState } from "recoil";
import styled from "styled-components";

function ProfileUploader() {
  const [auth, setAuth] = useRecoilState(authState);
  const { mutate: postProfileMutate } = useMutation(
    ["postProfileMutation"],
    uploadProfile,
    {
      onSuccess: (data) => {
        setAuth({ ...auth, ...data });
      },
    }
  );

  const fileChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const image = e.target.files[0];
        const form = new FormData();

        form.append("image", image);

        postProfileMutate(form);
      }
    },
    [postProfileMutate]
  );

  return (
    <Block>
      <Label htmlFor="profileImage" />
      <FileInput id="profileImage" type="file" onChange={fileChange} />
      {auth?.profile ? (
        <img
          src={`${process.env.REACT_APP_API_SERVER}/${auth.profile}`}
          alt="user-profile"
        />
      ) : (
        <AiOutlineUser />
      )}
    </Block>
  );
}

const Label = styled.label`
  position: absolute;

  width: 150px;
  height: 150px;

  top: 0;
  left: 0;

  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const Block = styled.div`
  position: relative;

  width: 150px;
  height: 150px;

  & > * {
    width: 150px;
    height: 150px;

    object-fit: cover;
  }

  border-radius: 75px;
  border: 2px solid ${white[700]};
  margin: 0 0 12px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
`;

export default ProfileUploader;
