import React from "react";
import LogoContainer from "../../../molecule/dashboard/logoContainer";
import AvatarContainer from "./avatarContainer";
import Searchbar from "../../../molecule/dashboard/searchBar";
import { CardDetail } from "../../../../types/CardDetail";
import Link from "next/link";

const Navbar = ({
  setCardDetails,
  onShowProfile,
}: {
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetail[]>>;
  onShowProfile: () => void;
}) => {
  return (
    <header className="backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 shadow-xl sticky top-0 z-30 transition-all duration-300">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        <Link
          href="/"
          className="focus:outline-none hover:scale-105 active:scale-95 transition-transform duration-200 rounded-lg"
          aria-label="Home"
        >
          <LogoContainer
            logoName="SeaVentures"
            imageUrl="https://w7.pngwing.com/pngs/53/343/png-transparent-red-man-surfing-logo-surfing-investment-banking-surf-the-sea-beach-photography-people.png"
          />
        </Link>

        <div className="flex-1 flex justify-center mx-6">
          <Searchbar setCardDetails={setCardDetails} />
        </div>

        <div className="flex items-center gap-4">
          <button
            className="focus:outline-none hover:ring-2 ring-cyan-400 rounded-full transition duration-200"
            aria-label="User menu"
            tabIndex={0}
          >
            <AvatarContainer
              propicUrl="https://avatars.githubusercontent.com/u/131803346?v=4"
              onProfileClick={onShowProfile}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;