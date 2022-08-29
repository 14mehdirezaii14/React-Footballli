import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThemeProvider } from "next-themes";
import store from "./Redux/store";
import { Provider } from "react-redux";
const Header = React.lazy(() => import("./components/Header/Header"));
const RenderRouter = React.lazy(() => import("./components/RenderRouter"));
const ErrorBoundary = React.lazy(
  () => import("./components/HandleError/ErrorBoundary")
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Provider store={store}>
          <Header />
          {/*  */}
          <RenderRouter />
          {/*  */}
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
