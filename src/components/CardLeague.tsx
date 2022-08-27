import { useState, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const CardLeagues = ({ leaguename }: { leaguename: string }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // console.log(leaguename);
  }, []);
  return (
    <Card className="dark:bg-gray-900 dark:text-white mx-2 my-5">
      <CardContent>
        <button
          className="flex w-full   justify-between"
          onClick={() => (open ? setOpen(false) : setOpen(true))}
        >
          {leaguename}
          <div className="float-left pb-3">
            {open ? <ExpandMore /> : <ExpandLess />}
          </div>
        </button>
      </CardContent>
      <Collapse in={open}>
        <CardContent className="border-t  dark:border-t-gray-600">
          <div className="flex justify-around mb-3 pb-3 border-b  dark:border-b-gray-600">
            <p>سپاهان</p>
            <p>12:30</p>
            <p>استقلال</p>
          </div>
          <div className="flex justify-around">
            <p>سپاهان</p>
            <p>12:30</p>
            <p>استقلال</p>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardLeagues;
