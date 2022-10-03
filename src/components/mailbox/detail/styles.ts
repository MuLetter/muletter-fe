import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 32px;

  height: 100%;
  overflow-y: scroll;
`;

export const Row = styled.div`
  display: flex;

  flex-direction: row;
`;

export const Col = styled.div`
  width: 50%;
  display: flex;

  flex-direction: row;
  justify-content: center;
`;
