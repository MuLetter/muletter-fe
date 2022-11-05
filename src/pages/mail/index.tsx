import { AuthWrap } from "@component";
import { MailContainer } from "@container";
import { ControlMailProvider } from "@context";
import { Route, Routes } from "react-router-dom";

export function MailPage() {
  return (
    <AuthWrap>
      <Routes>
        <Route
          path="/:id"
          element={
            <ControlMailProvider>
              <MailContainer />
            </ControlMailProvider>
          }
        />
      </Routes>
    </AuthWrap>
  );
}
