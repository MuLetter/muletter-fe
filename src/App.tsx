import { Callback } from "@component";
import RootPage, {
  AuthPage,
  MailBoxPage,
  MainPage,
  MapPage,
  MailPage,
  InitAuthSettingPage,
  LoadingPresentation,
} from "@page";
import { initAuthState } from "@store/atom";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";

function App() {
  const initAuth = useRecoilValue(initAuthState);

  return initAuth ? (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<MainPage />} />
        <Route path="/mail/*" element={<MailPage />} />
        <Route path="/mailbox/*" element={<MailBoxPage />} />
        <Route path="/map/*" element={<MapPage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/loading" element={<LoadingPresentation />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/callback" element={<Callback />} />
      <Route path="/*" element={<InitAuthSettingPage />} />
    </Routes>
  );
}

export default App;
