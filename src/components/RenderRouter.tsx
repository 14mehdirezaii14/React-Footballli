import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const Home = React.lazy(() => import("../pages/HomePage"));

const RenderRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          {/* If the number of pages is more than one, you can use routes.tsx */}
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RenderRouter;
