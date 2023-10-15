"use client"

import Link from "next/link";
import React from "react";
import { BiShapeSquare } from "react-icons/bi";
import { usePathname } from "next/navigation";
import classnames from 'classnames'

const NavBar = () => {
const currentPath = usePathname();
// console.log(currentPath)

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BiShapeSquare size={30} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
                'text-red-600' : link.href === currentPath,
                'text-zinc-500' : link.href!== currentPath,
                'hover:text-zinc-800 transition-colors' : true
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
