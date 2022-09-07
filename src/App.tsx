import React, { Suspense } from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Loading from "./components/Loading";
import lazyWithPreload from "./components/lazyWithPreload";

const Header = lazyWithPreload(() => import("./components/Header/Header"));
const RenderRouter = lazyWithPreload(() => import("./components/RenderRouter"));
const HandleError = lazyWithPreload(
  () => import("./components/HandleError/HandleError")
);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Loading />}>
        <HandleError>
          <RenderRouter />
        </HandleError>
      </Suspense>
    </Provider>
  );
};

export default App;
