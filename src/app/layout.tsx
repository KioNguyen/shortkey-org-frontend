"use client";
import SettingDrawer from "@/components/organism/setting-drawer";
import ShortkeyListDrawer from "@/components/organism/shortkey-list-drawer";
import { useHomeSideStore } from "@/store/home-side";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { side, open, setOpen } = useHomeSideStore();

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        {/* <button onClick={() => setIsOpen(true)}>Open</button>
        <button onClick={() => setIsOpenModal(true)}>OpenModal</button> */}

        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <button className="btn" onClick={() => setOpen(true)}>
          Open
        </button>
        <SettingDrawer />
        <ShortkeyListDrawer />
      </body>
    </html>
  );
}
