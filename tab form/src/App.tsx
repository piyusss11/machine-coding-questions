import { FC, useState } from "react";
import Interests from "./components/Interests";
import Profile, { TabProps } from "./components/Profile";
import Settings from "./components/Settings";
export interface Iuser {
  name: string;
  email: string;
  interests: string[];
  theme: string;
}
export interface Tab {
  tabName: string;
  component: FC<TabProps>;
}

function App() {
  const me: Iuser = {
    name: "piyush",
    email: "piyush@gmail.com",
    interests: ["javascript", "react", "css"],
    theme: "light",
  };
  const [user, setUser] = useState<Iuser>(me);
  const tabs: Tab[] = [
    {
      tabName: "Profile",
      component: Profile,
    },
    {
      tabName: "Interests",
      component: Interests,
    },
    {
      tabName: "Settings",
      component: Settings,
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Tab Form Using React</h1>
        <div className=" flex gap-4 items-center">
          {tabs.map((tab) => (
            <button
              onClick={() => setCurrentTab(tab)}
              className={`border-1 cursor-pointer px-2 ${
                currentTab.tabName === tab.tabName ? "bg-gray-400" : ""
              }`}
              key={tab.tabName}
            >
              {tab.tabName}
            </button>
          ))}
        </div>
        <div>
          <currentTab.component user={user} setUser={setUser} />
        </div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.interests}</div>
        <div>{user.theme}</div>
      </div>
    </>
  );
}

export default App;
