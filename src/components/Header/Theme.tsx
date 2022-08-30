import { useState } from "react";
import SunIcon from "../../icons/sun-svgrepo-com.svg";
import MoonIcon from "../../icons/moon-svgrepo-com.svg";
import { useTheme } from "next-themes";

const Theme = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  
  const [imgTheme, setImgTheme] = useState(
    theme === "dark" ? SunIcon : MoonIcon
  );

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setImgTheme(MoonIcon);
    } else {
      setTheme("dark");
      setImgTheme(SunIcon);
    }
  };

  return (
    <button title="Theme" onClick={changeTheme} className="btn">
      <img src={imgTheme} width="25" alt="" />
    </button>
  );
};

export default Theme;
