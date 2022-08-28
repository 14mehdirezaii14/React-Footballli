import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hookRedux";

const DateList = () => {
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "SET_DATES" });
  }, []);
  const changeTimeRange = (date: string) => {
    dispatch({ type: "WATCH_GET_LIST_GAMES", peyload: date });
  };
  return (
    <div className="flex overflow-x-scroll scroll-smooth">
      <ul className="flex ">
        {selector.dateReducer === "loading"
          ? "loadin"
          : selector.dateReducer.map((item: any, index: any) => {
              return (
                <li className="w-24" key={index}>
                  <button
                    className={
                      item.active
                        ? `border-b-2 pb-1 border-b-green-400 btn px-2`
                        : `btn`
                    }
                    onClick={() => changeTimeRange(item.date)}
                  >
                    {item.nameDay}
                  </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default DateList;
