import { TextInput } from "@component/common";
import { FileUpload } from "@component/common";
import styled from "styled-components";

function ContentRegist() {
  return (
    <ContentRegistWrap>
      <FileUpload />
      <TextInput
        styleTheme="outline-white"
        placeholder="우체통의 이름을 지어주세요."
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
