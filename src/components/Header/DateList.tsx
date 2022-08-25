import { useEffect } from "react";
let moment = require("moment-jalaali");
const DateList = (): JSX.Element => {
  useEffect(() => {
    console.log(moment().format("jYYYY/jM/jD"));
  }, []);
  return <>DateList</>;
};

export default DateList;
