import { useEffect } from "react";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../Redux/hookRedux";
import { getToday } from "../components/getToday";
import { CardLeaguesType } from "../types";
import lazyWithPreload from "../components/lazyWithPreload";
const CardLeagues = lazyWithPreload(() => import("../components/Games/CardLeague"));

const HomePage = () => {
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let today: string = getToday();
    dispatch({ type: "WATCH_GET_LIST_GAMES", peyload: today });
  }, []);
  return (
    <div className="container w-full mx-auto">
      {selector.listGamesReducer === "loading" ? (
        <Loading />
      ) : (
        Object.entries<CardLeaguesType>(selector.listGamesReducer).map(
          (item, index) => {
            return <CardLeagues leagueMatches={item[1]} key={index} />;
          }
        )
      )}
    </div>
  );
};

export default HomePage;
