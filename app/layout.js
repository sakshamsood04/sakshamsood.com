import { Inter } from 'next/font/google';
import './globals.css';

// You can use Next.js font system for Cormorant Garamond
// import { Cormorant_Garamond } from 'next/font/google';
// const cormorant = Cormorant_Garamond({ 
//   weight: ['300', '400', '500'],
//   subsets: ['latin'],
//   display: 'swap'
// });

export const metadata = {
  title: 'Minimalist Portfolio',
  description: 'A personal minimalist portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}