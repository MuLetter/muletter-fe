import { MailBoxRegistComponent, Wizard } from "@component";
import { MailBoxContainer } from "@container";
import { Route, Routes } from "react-router-dom";

export function MailBoxPage() {
  return (
    <Routes>
      <Route index element={<MailBoxContainer />} />
      <Route
        path="/regist"
        element={
          <MailBoxRegistComponent>
            <Wizard />
          </MailBoxRegistComponent>
        }
      />
    </Routes>
  );
}
