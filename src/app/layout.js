import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*<div className="flex flex-col flex-1 items-center justify-center bg-(--secondary-background) font-sans">*/}

          {/*{children}*/}
        {/*</div>*/}
          <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 bg-blue-500 h-32"><Navbar /></div>
          <div className="col-span-3 bg-yellow-500 h-screen">Sidebar</div>
          <div className="col-span-9 bg-green-500 h-screen">{children}</div>
            {/*<div className="col-span-12 bg-red-500 h-16">Footer</div>*/}
          </div>
      </body>
    </html>
  );
}
