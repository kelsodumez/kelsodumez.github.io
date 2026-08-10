import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
          <div className="title">Kelso du Mez</div>
          <div className="sidebar"><Sidebar/></div>
          <div className="content">{children}</div>
      </body>
    </html>
  );
}
