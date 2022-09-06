import { Footer, Header } from "@component/common";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function RootPage() {
  return (
    <>
      <Header />
      <Content></Content>
      <Outlet />
      <Footer />
    </>
  );
}

const Content = styled.article`
  margin: 64px 0 0;

  min-width: 1280px;
  max-width: 1440px;
  margin: 0 auto;
`;

export default RootPage;
