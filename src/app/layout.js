// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Kelso du Mez",
  description: "Game developer & Graphic Designer specialising in UI based in Christchurch",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <meta name="google-site-verification" content="nepHzCd3kLgbsMerKFsSTE9wv2x54KRa9sF2bX0arVQ"/>
          <meta name="msvalidate.01" content="7BC3B1435A92F48144F97876DF237EC7"/>
          <link rel="icon" href="/src/app/icon.svg" type="image/svg+xml"/>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
          <title>Kelso du Mez</title>
      </head>
      <body>
      <Navbar/>
      <div className="content">{children}</div>
      </body>
      </html>
  );
}