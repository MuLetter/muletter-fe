import { MailBox3D } from "@asset/symbols";
import { OKAlert } from "@component/common/alert/OKAlert";
import React from "react";
import { MailBoxWrap } from "../styles";

export * from "./Wizard";
export function MailBoxRegistComponent({
  children,
}: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);
  const [content, setContentView] = React.useState<boolean>(false);

  React.useEffect(() => {
    setRotate(true);

    setTimeout(() => {
      setTopAnchor(true);
      setOpen(true);
    }, 750);
  }, []);

  const changeContentView = React.useCallback((state: boolean) => {
    setContentView(state);
    setTimeout(() => {
      window.scrollBy({
        top: 80,
        behavior: "smooth",
      });
    }, 200);
  }, []);

  return (
    <>
      <MailBoxWrap>
        <MailBox3D
          rotate={rotate}
          topAnchor={topAnchor}
          open={open}
          content={content}
          setContentView={changeContentView}
        >
          {children}
        </MailBox3D>
        <OKAlert
          title="우체통이 등록 되었어요."
          subtitle="당신만을 위한 음악들을 적어서 보내드릴게요."
        />
      </MailBoxWrap>
    </>
  );
}
