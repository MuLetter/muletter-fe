import { JoinIntro, MailBoxIntro, MailIntro } from "@component";
import React from "react";
import { Wrap } from "./styles";

export function MainContainer() {
  const [view, setView] = React.useState<number>(0);

  const onChangeView = React.useCallback(() => {
    if (view < 2) {
      if (window.innerHeight + window.scrollY > 1300) {
        setView(1);
      }
      if (window.innerHeight + window.scrollY > 2000) {
        setView(2);
      }
    }
  }, [view]);

  React.useEffect(() => {
    window.addEventListener("scroll", onChangeView);

    return () => {
      window.removeEventListener("scroll", onChangeView);
    };
  }, [onChangeView]);

  React.useEffect(() => {
    onChangeView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrap>
      {view >= 0 && <MailIntro />}
      {view >= 1 && <MailBoxIntro />}
      {view >= 2 && <JoinIntro />}
    </Wrap>
  );
}
