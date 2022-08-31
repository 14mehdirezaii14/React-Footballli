import React, { useEffect, useState, ReactChildren, ReactChild } from "react";
import { useAppSelector } from "../../Redux/hookRedux";
import {
  AuxProps,
  SelectorType,
} from "../../types";
const ErrVpn = React.lazy(() => import("./ErrVpn"));
const ErrOffline = React.lazy(() => import("./ErrOffline"));

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
