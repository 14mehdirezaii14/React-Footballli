import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hookRedux";

const DateList = () => {
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "SET_DATES" });
  }, []);
  return (
    <div className="flex overflow-x-scroll scroll-smooth">
      <ul className="flex ">
        {selector.dateReducer === "loading"
          ? "loadin"
          : selector.dateReducer.map((item: any, index: any) => {
              return (
                <li className="w-24 " key={index}>
                  <button className="btn">{item}</button>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default DateList;
