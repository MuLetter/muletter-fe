import { TextInput } from "@component/common";
import { FileUpload } from "@component/common";
import { registedMailBoxState } from "@store/atom";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

function ContentRegist() {
  const [mailBox, setMailBox] = useRecoilState(registedMailBoxState);
  const [image, setImage] = React.useState<Blob | null>(
    mailBox ? mailBox.image : null
  );
  const [mailBoxName, setMailBoxName] = React.useState<string>(
    mailBox ? mailBox.title : ""
  );

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMailBoxName(e.target.value);
    },
    []
  );

  React.useEffect(() => {
    if (image) {
      setMailBox({
        image,
        title: mailBoxName,
      });
    }
  }, [image, mailBoxName, setMailBox]);

  return (
    <ContentRegistWrap>
      <FileUpload setImage={setImage} />
      <TextInput
        styleTheme="outline-white"
        placeholder="우체통의 이름을 지어주세요."
        name="mailBoxName"
        value={mailBoxName}
        onChange={onChange}
      />
    </ContentRegistWrap>
  );
}

const ContentRegistWrap = styled.div`
  width: 464px;
  margin: 64px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
`;

export default ContentRegist;
