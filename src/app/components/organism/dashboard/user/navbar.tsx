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
    <header className="backdrop-blur-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow border-b border-blue-300  sticky top-0 z-30 transition-all duration-300 animate-fadeInDown">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3 w-full">
        {/* Logo */}
        <Link
          href="/"
          className="focus:outline-none hover:scale-110 active:scale-95 transition-transform duration-300 rounded-lg flex-shrink-0"
          aria-label="Home"
        >
          <LogoContainer
            logoName="SeaVentures"
            imageUrl="https://w7.pngwing.com/pngs/53/343/png-transparent-red-man-surfing-logo-surfing-investment-banking-surf-the-sea-beach-photography-people.png"
          />
        </Link>

        {/* Searchbar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md animate-fadeIn">
          <Searchbar setCardDetails={setCardDetails} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            className="focus:outline-none hover:ring-4 ring-blue-300 rounded-full transition duration-300 animate-bounce"
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
      <style jsx global>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease;
        }
      `}</style>
    </header>
  );
};

export default Navbar;