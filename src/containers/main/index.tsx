import { JoinIntro, MailBoxIntro, MailIntro } from "@component";
import React from "react";
import { Wrap } from "./styles";

export function MainContainer() {
  const [view, setView] = React.useState<number>(0);

  const onChangeView = React.useCallback(() => {
    if (window.innerHeight + window.scrollY > 1300 && view === 0) {
      setView(1);
    }
    if (window.innerHeight + window.scrollY > 2000 && view === 1) {
      setView(2);
    }
  }, [view]);

  React.useEffect(() => {
    window.addEventListener("scroll", onChangeView);

    return () => {
      window.removeEventListener("scroll", onChangeView);
    };
  }, [onChangeView]);

  return (
    <Wrap>
      {view >= 0 && <MailIntro />}
      {view >= 1 && <MailBoxIntro />}
      {view >= 2 && <JoinIntro />}
    </Wrap>
  );
}
