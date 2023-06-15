import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: Props) {
  return <div className={twMerge("bg-black-midnight rounded-lg", className)}>{children}</div>;
}
