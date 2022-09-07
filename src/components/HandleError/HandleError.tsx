import { useEffect, useState, ReactChildren, ReactChild } from "react";
import { useAppSelector } from "../../Redux/hookRedux";
import { AuxProps, SelectorType } from "../../types";
import lazyWithPreload from "../lazyWithPreload";

const ErrVpn = lazyWithPreload(() => import("./ErrVpn"));
const ErrOffline = lazyWithPreload(() => import("./ErrOffline"));

const HandleError = ({ children }: AuxProps) => {
  const [offline, setOffline] = useState(false);
  const selector = useAppSelector((state: SelectorType) => state);
  useEffect(() => {
    console.log("render");
    if (navigator.onLine) {
      setOffline(false);
    } else {
      setOffline(true);
    }
    window.addEventListener("online", () => setOffline(false));
    window.addEventListener("offline", () => setOffline(true));
  }, []);
  return (
    <>
      {offline ? (
        <ErrOffline />
      ) : selector.listGamesReducer === "errVpn" ? (
        <ErrVpn />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default HandleError;
