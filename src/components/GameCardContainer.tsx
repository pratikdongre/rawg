import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isSkeleton?: boolean;
}

const GameCardContainer = ({ children, isSkeleton = false }: Props) => {
  return (
    <div
      className={` m-2 rounded-2xl w-full h-full  border-2 overflow-hidden ${
        isSkeleton ? "bg-zinc-800 animate-pulse shadow-md" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default GameCardContainer;
