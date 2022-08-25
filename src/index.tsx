import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThemeProvider } from "next-themes";
const Header = React.lazy(() => import("./components/Header/Header"));
const RenderRouter = React.lazy(() => import("./components/RenderRouter"));
const Loading = React.lazy(() => import("./components/Loading"));



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <Suspense fallback={<Loading />}>
        <Header />
        {/*  */}
        <RenderRouter />
        {/*  */}
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
