import lazyWithPreload from "./components/lazyWithPreload";
const Home = lazyWithPreload(() => import("./pages/HomePage"));

const routers: { path: string; element: JSX.Element }[] = [
  { path: "/", element: <Home /> },
];

export default routers;
