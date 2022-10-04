import { AuthWrap } from "@component";
import { MailBoxContainer, MailBoxRegistContainer } from "@container";
import { MailBoxDetailContainer } from "@container/mailbox/detail";
import { Route, Routes } from "react-router-dom";

export function MailBoxPage() {
  return (
    <AuthWrap>
      <Routes>
        <Route index element={<MailBoxContainer />} />
        <Route path="/regist" element={<MailBoxRegistContainer />} />
        <Route path="/:id" element={<MailBoxDetailContainer />} />
      </Routes>
    </AuthWrap>
  );
}
