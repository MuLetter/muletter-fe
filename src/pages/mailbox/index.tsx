import { MailBoxContainer, MailBoxRegistContainer } from "@container";
import { Route, Routes } from "react-router-dom";

export function MailBoxPage() {
  return (
    <Routes>
      <Route index element={<MailBoxContainer />} />
      <Route path="/regist" element={<MailBoxRegistContainer />} />
    </Routes>
  );
}
