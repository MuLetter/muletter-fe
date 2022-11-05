import { TextInput } from "@component/common";
import { FileUpload } from "@component/common";
import { ControlWizardContext } from "@context";
import React from "react";
import styled from "styled-components";
import { WizardControlItem } from "./types";

function ContentRegist({ setNextConfirm }: WizardControlItem) {
  const { content, setContent } = React.useContext(ControlWizardContext);
  const [mainImage, setMainImage] = React.useState<string | null | undefined>(
    content ? content.imageLinkBak : null
  );
  const [image, setImage] = React.useState<Blob | null>(
    content ? content.image : null
  );
  const [mailBoxName, setMailBoxName] = React.useState<string>(
    content ? content.title : ""
  );

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMailBoxName(e.target.value);
    },
    []
  );

  React.useEffect(() => {
    const nextConfirm = async () => {
      if (image === null) {
        alert("우체통의 이미지를 등록해주세요.");
        return false;
      }

      if (mailBoxName === "") {
        alert("우체통의 제목을 등록해주세요.");
        return false;
      }

      return true;
    };
    setNextConfirm(nextConfirm);
  }, [image, mailBoxName, setNextConfirm]);

  React.useEffect(() => {
    return () => {
      if (mailBoxName && image && mainImage)
        setContent({
          title: mailBoxName,
          image: image,
          imageLinkBak: mainImage,
        });
    };
  }, [mailBoxName, image, mainImage, setContent]);

  return (
    <ContentRegistWrap>
      <FileUpload
        setImage={setImage}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
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
