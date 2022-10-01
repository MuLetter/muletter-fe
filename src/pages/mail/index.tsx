import { MailContainer } from "@container";
import { Route, Routes } from "react-router-dom";

export function MailPage() {
  return (
    <Routes>
      <Route path="/:id" element={<MailContainer />} />
    </Routes>
  );
}
