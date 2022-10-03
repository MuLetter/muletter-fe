import styled from "styled-components";

export const AuthForm = styled.form`
  width: 100%;
  height: 468px;

  padding: 0 64px;
  box-sizing: border-box;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 0 0;
  row-gap: 16px;
`;

export const ButtonWrap = styled.div<{ marginTop: number }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin: ${({ marginTop }) => marginTop}px 0 0;

  & > span {
    flex: 1;
  }
`;

export const SpotifyWrap = styled.div`
  margin: 16px 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;

  & > img {
    width: 48px;
    height: 48px;

    object-fit: cover;
    border-radius: 24px;
  }
`;
