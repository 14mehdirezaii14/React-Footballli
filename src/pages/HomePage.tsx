import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../Redux/hookRedux";
const CardLeagues = React.lazy(() => import("../components/CardLeague"));

const HomePage = () => {
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: "WATCH_GET_LIST_GAMES" });
  }, []);
  return (
    <div className="container w-full mx-auto">
      {selector.listGamesReducer === "loading" ? (
        <Loading />
      ) : (
        selector.listGamesReducer.map((item: any, index: any) => {
          return <CardLeagues key={index} leaguename={item.league.name} />;
        })
      )}
    </div>
  );
};

export default HomePage;
