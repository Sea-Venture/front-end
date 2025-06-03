import React from "react";
import DarkModeToggle from "../../../darkModeToggle/darkModeToggle";
import LogoContainer from "../../../molecule/dashboard/logoContainer";
import AvatarContainer from "./avatarContainer";
import Searchbar from "../../../molecule/dashboard/searchBar";

const Navbar = ({
  setCardDetails,
  onShowProfile,
}: {
  setCardDetails: React.Dispatch<React.SetStateAction<any[]>>;
  onShowProfile: () => void;
}) => {
  return (
    <nav className="p-2 bg-gray-100 dark:bg-gray-800 flex items-center justify-between w-full sticky top-0 z-10 shadow-md">
      <div className="flex-shrink-0">
        <LogoContainer logoName="SeaVentures" imageUrl="https://w7.pngwing.com/pngs/53/343/png-transparent-red-man-surfing-logo-surfing-investment-banking-surf-the-sea-beach-photography-people.png" />
      </div>

      <div className="flex-grow mx-auto">
        <Searchbar setCardDetails={setCardDetails} />
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <DarkModeToggle />
        <div className="flex items-center justify-center border-4 border-gray-100 dark:border-gray-800 rounded-full p-2">
          <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-gray-700 p-2 px-2">
            <AvatarContainer
              propicUrl="https://avatars.githubusercontent.com/u/131803346?v=4"
              onProfileClick={onShowProfile}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;