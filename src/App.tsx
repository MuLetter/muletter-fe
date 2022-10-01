import { Callback } from "@component";
import RootPage, {
  AuthPage,
  MailBoxPage,
  MainPage,
  MapPage,
  MailPage,
} from "@page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<MainPage />} />
        <Route path="/mail/*" element={<MailPage />} />
        <Route path="/mailbox/*" element={<MailBoxPage />} />
        <Route path="/map/*" element={<MapPage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/callback" element={<Callback />} />
      </Route>
    </Routes>
  );
}

export default App;
