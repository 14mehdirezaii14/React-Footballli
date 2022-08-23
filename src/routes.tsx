import React from "react";

const Home = React.lazy(() => import("./pages/HomePage"));

const routers = [{ path: "/", element: <Home /> }];


export default routers
