import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Loading = React.lazy(() => import("./Loading"));
const Home = React.lazy(() => import("../pages/HomePage"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

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
