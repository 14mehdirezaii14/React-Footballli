import React from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import ErrOffline from "./components/HandleError/ErrOffline";
const Header = React.lazy(() => import("./components/Header/Header"));
const RenderRouter = React.lazy(() => import("./components/RenderRouter"));

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Header />
      <ErrOffline>
        <RenderRouter />
      </ErrOffline>
    </Provider>
  );
};

export default App;
