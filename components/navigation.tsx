"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "quotes", path: "/quotes" },
    { name: "writings", path: "/writings" },
    { name: "contact", path: "/contact" },
  ]

  return (
    <nav className="fixed h-full w-[200px] p-8">
      <div className="flex flex-col space-y-6 mt-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-lg hover:text-amber-800 hover:animate-bounce-subtle transition-colors ${
              pathname === item.path ? "text-amber-800" : "text-gray-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

