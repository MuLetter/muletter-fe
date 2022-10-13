import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "@styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import { ScrollToTop, SocketListener } from "@utils";
import { AlertListener, Audio } from "@component/common";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <SocketListener />
      <Router>
        <ScrollToTop />
        <AlertListener />
        <App />
      </Router>
      <Audio />
    </QueryClientProvider>
  </RecoilRoot>
);

reportWebVitals();
