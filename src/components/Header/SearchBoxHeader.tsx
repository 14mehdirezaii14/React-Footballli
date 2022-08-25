import { useState } from "react";
import SearchIcon from "../../icons/search-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
const SearchBoxHeader = (): JSX.Element => {
  const [valInput, setValInput] = useState("");
  return (
    <>
      <input
        onChange={(e) => setValInput(e.target.value)}
        type="text"
        value={valInput}
        placeholder="جستجو ..."
        className="w-full bg-gray-100 dark:bg-slate-600 mt-2 pr-7 py-1 rounded-sm"
      />
      <FontAwesomeIcon className="relative -top-7 right-2" icon={faSearch} size="xs" />
      {/* <img
        src={SearchIcon}
        className="relative -top-7 right-2 text-white"
        width={20}
        alt=""
      /> */}
      {/* <i className="fal fa-search relative -top-7 right-2"></i> */}
    </>
  );
};

export default SearchBoxHeader;
