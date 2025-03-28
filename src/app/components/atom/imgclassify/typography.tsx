import React from "react";

const Typography = ({ text, className }: { text: string; className?: string }) => {
  return <p className={
    `${className} text-black text-2xl `}>{text}</p>;
};

export default Typography;
