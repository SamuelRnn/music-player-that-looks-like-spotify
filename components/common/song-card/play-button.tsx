"use client";

import { twMerge } from "tailwind-merge";
import { FaPlay } from "react-icons/fa";
interface Props {
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function defaultClick() {}

export default function PlayButton({ className, onClick = defaultClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-full aspect-square w-[50px] bg-green-lime bottom-2 right-2",
        "shadow-lg shadow-black-full/30 grid place-content-center",
        className
      )}
    >
      <FaPlay className='text-lg text-black-full translate-x-[1px] translate-y-[1px]' />
    </button>
  );
}
