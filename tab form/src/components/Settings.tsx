import { ChangeEvent, FC } from "react";
import { TabProps } from "./Profile";
import { Iuser } from "../App";

const Settings: FC<TabProps> = ({ user, setUser }) => {
  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev: Iuser) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <div className="border-1">
      <h1>Settings Tab</h1>
      <div className="flex flex-col justify-center">
        <label className="">
          <input
            onChange={handleThemeChange}
            name="light"
            className="border-1"
            checked={user.theme === "light"}
            type="radio"
          />
          Light
        </label>
        <label className="">
          <input
            onChange={handleThemeChange}
            name="dark"
            className="border-1"
            checked={user.theme === "dark"}
            type="radio"
          />
          Dark
        </label>
      </div>
    </div>
  );
};

export default Settings;
