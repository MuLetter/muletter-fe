import { MailBoxComponent } from "@component";
import { OpacityAnimationCont } from "@styles/block";

export function MailBoxContainer() {
  return (
    <OpacityAnimationCont>
      <MailBoxComponent />
    </OpacityAnimationCont>
  );
}

export * from "./regist";
