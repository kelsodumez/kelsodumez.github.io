import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kelso du Mez",
  description: "Game developer & Graphic Designer specialising in UI based in Christchurch",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <meta name="google-site-verification" content="nepHzCd3kLgbsMerKFsSTE9wv2x54KRa9sF2bX0arVQ" />
          <meta name="msvalidate.01" content="7BC3B1435A92F48144F97876DF237EC7" />
          <title>Kelso du Mez</title>
      </head>
      <body>
      <div className="title"><header>Kelso</header><header>du</header><header>Mez</header></div>
      <div className="navbar"><Navbar /></div>
      <div className="content">{children}</div>
      </body>
      </html>
  );
}