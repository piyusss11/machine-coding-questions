import { Dispatch, FC, SetStateAction } from "react";
import { Iuser } from "../App";
export interface TabProps{
    user:Iuser;
    setUser:Dispatch<SetStateAction<Iuser>>;
}
const Profile: FC<TabProps> = ({ user, setUser }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setUser((prev: Iuser) => ({ ...prev, [key]: e.target.value }));
    }
  return (
    <>
      <div className="border-1 flex flex-col justify-center">
        <h1>Profile Tab</h1>
        <label>
          Name:
          <input value={user.name} onChange={(e)=>handleChange(e,"name")} className="border-1" type="text" />
        </label>
        <label>
          Email:
          <input value={user.email} onChange={(e)=>handleChange(e,"email")} className="border-1" type="text" />
        </label>
      </div>
    </>
  );
};

export default Profile;
