import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="py-4 text-blue-950 text-2xl font-bold text-center">
      {title}
    </header>
  );
};

export default Header;
