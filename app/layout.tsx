import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "saksham's portfolio",
  description: "gallery of my projects, thoughts, and inspirations",
    //generator: 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50 text-gray-800 min-h-screen flex`}>
        <Navigation />
        <main className="flex-1 p-8 md:p-12 ml-[200px]">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'