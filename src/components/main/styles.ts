import styled from "styled-components";

export const MailIntroWrap = styled.div`
  margin: 64px 0 120px;
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 800px;

  & > .service-info {
    flex: 1;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > .content {
      display: flex;
      flex-direction: row;

      height: 360px;
      margin: 40px 0 0;
    }
  }

  & > .mail-wrap {
    display: flex;
    margin: 0 180px 0 0;

    justify-content: flex-start;
    align-items: center;
  }
`;

export const MailBoxIntroWrap = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 326px;
  margin: 0 0 232px;

  & > .title {
    position: absolute;
    right: calc(80px + 32px);
    top: 12px;
    text-align: right;
  }

  & > .mailbox-wrap {
    position: relative;
    margin: 120px 0 0;

    flex: 1;
    height: 100%;
  }
`;

export const JoinIntroWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 360px 0 208px;

  width: 100%;
  height: 800px;

  & > .join-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    height: 100%;

    row-gap: 16px;

    & button {
      width: 303px;
    }
  }

  & > .mail-wrap {
    display: flex;

    justify-content: flex-start;
    align-items: center;
  }
`;

export const MusicCardWrap = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
