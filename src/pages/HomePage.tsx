import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../Redux/hookRedux";
import { getToday } from "../components/getToday";
const CardLeagues = React.lazy(() => import("../components/Games/CardLeague"));

const HomePage = () => {
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let today = getToday();
    dispatch({ type: "WATCH_GET_LIST_GAMES", peyload: today });
  }, []);
  useEffect(() => {
    if (selector.listGamesReducer !== "loading") {

      console.log(selector);
    }
  }, [selector]);
  return (
    <div className="container w-full mx-auto">
      {selector.listGamesReducer === "loading" ? (
        <Loading />
      ) : (
        Object.entries(selector.listGamesReducer).map((item: any, index: any) => {
          return <CardLeagues key={index} leagueMatches={item[1]} />;
        })
      )}
    </div>
  );
};

export default HomePage;
