"use client";

import { useMemo } from "react";
import Box from "../common/box";
import { usePathname } from "next/navigation";
import { MdHome, MdSearch } from "react-icons/md";
import Link from "next/link";

interface Props {}

export default function Navigation({}: Props) {
  const location = usePathname();

  const routes = useMemo(
    () => [
      {
        id: 1,
        title: "Home",
        href: "/",
        active: location === "/",
        icon: <MdHome className='text-3xl' />,
      },
      {
        id: 2,
        title: "Search",
        href: "/search",
        active: location === "/search",
        icon: <MdSearch className='text-3xl' />,
      },
    ],
    [location]
  );

  return (
    <Box className='px-1 py-2'>
      <nav>
        {routes.map((route) => (
          <Link
            key={route.id}
            href={route.href}
            className={`flex items-center gap-4 rounded-md px-4 py-2 font-bold text-gray-mist transition-hover ${
              route.active && "text-white"
            } hover:bg-black-charcoal`}
          >
            {route.icon}
            <span>{route.title}</span>
          </Link>
        ))}
      </nav>
    </Box>
  );
}
