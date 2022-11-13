import styled from "styled-components";

export const MailBoxWrap = styled.div`
  position: relative;

  width: 100vw;
  min-width: 1280px;
  max-width: 1440px;
  height: calc(100vh - 140px);
  min-height: 440px;
  max-height: 820px;

  padding: 0 0 64px;
  margin: 78px auto 120px;
  box-sizing: border-box;

  & > .help-btn {
    position: fixed;

    bottom: 48px;
    right: 48px;

    z-index: 255;
  }
`;
