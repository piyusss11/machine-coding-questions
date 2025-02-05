import { FC } from "react";
import { TabProps } from "./Profile";
import { Iuser } from "../App";

const Interests:FC<TabProps> = ({user,setUser}) => {
    const handleChange = (key: string) => {
        setUser((prev: Iuser) => ({
          ...prev,
          interests: prev.interests.includes(key)
            ? prev.interests.filter((interest) => interest !== key)
            : [...prev.interests, key]}));
    }
  return (
    <div className="border-1 ">
      <h1>Interests Tab</h1>
      <div className="flex flex-col justify-center">
        {user.interests.map((interest) => (
          <label key={interest}>
            <input onChange={() => handleChange( interest)} checked={user.interests.includes(interest)} value={interest} className="border-1" type="checkbox" />
            {interest}
          </label>
        ))}
       
      </div>
    </div>
  );
};

export default Interests;
