import { Footer, Header } from "@component/common";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

export * from "./main";
export * from "./auth";
export * from "./mailbox";
export * from "./map";
export * from "./mail";
export * from "./pre";

const NOT_LAYOUT_PAGES = [
  "/auth",
  "/auth/join",
  "/auth/",
  "/auth/join/",
  "/callback",
  "/callback/",
  "/loading",
];

function RootPage() {
  const { pathname } = useLocation();
  return NOT_LAYOUT_PAGES.includes(pathname) ? (
    <Outlet />
  ) : (
    <>
      <Header />
      {!pathname.includes("/mailbox") && pathname.includes("/mail") ? (
        <Outlet />
      ) : (
        <Content>
          <Outlet />
        </Content>
      )}

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
