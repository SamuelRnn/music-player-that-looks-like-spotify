"use client";

import { twMerge } from "tailwind-merge";
import { FaPause, FaPlay } from "react-icons/fa";
interface Props {
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  action?: "pause" | "play";
}

export default function PlayButton({
  className,
  onClick = function () {},
  action = "play",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-full aspect-square w-[50px] bg-green-lime bottom-2 right-2",
        "shadow-lg shadow-black-full/30 grid place-content-center",
        className
      )}
    >
      {action === "play" && (
        <FaPlay className="text-lg text-black-full translate-x-[1px] translate-y-[1px]" />
      )}
      {action === "pause" && (
        <FaPause className="text-lg text-black-full translate-x-[1px] translate-y-[1px]" />
      )}
    </button>
  );
}
