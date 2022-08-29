import { useEffect, useState, ReactNode } from "react";

const ErrOffline = (props: any) => {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
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
      {!offline ? (
        <>{props.children}</>
      ) : (
        <div className="text-center">oops you offline</div>
      )}
    </>
  );
};

export default ErrOffline;
