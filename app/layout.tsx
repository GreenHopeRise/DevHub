import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";



export const metadata: Metadata = {
  title: "Dev Hub",
  description: "Developer resourses hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"

    >
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
