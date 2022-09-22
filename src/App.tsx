import { Callback } from "@component";
import RootPage, { AuthPage, MainPage } from "@page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<MainPage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/callback" element={<Callback />} />
      </Route>
    </Routes>
  );
}

export default App;
