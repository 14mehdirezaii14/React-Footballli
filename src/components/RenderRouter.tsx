import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import lazyWithPreload from "./lazyWithPreload";
const Loading = lazyWithPreload(() => import("./Loading"));
const Home = lazyWithPreload(() => import("../pages/HomePage"));
const NotFound = lazyWithPreload(() => import("../pages/NotFound"));

const RenderRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* If the number of pages is more than one, you can use routes.tsx */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderRouter;
