import { AuthWrap } from "@component";
import { MailContainer } from "@container";
import { Route, Routes } from "react-router-dom";

export function MailPage() {
  return (
    <AuthWrap>
      <Routes>
        <Route path="/:id" element={<MailContainer />} />
      </Routes>
    </AuthWrap>
  );
}
