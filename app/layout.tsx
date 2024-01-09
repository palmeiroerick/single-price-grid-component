import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Karla } from "next/font/google";
import type { ReactNode } from "react";

const karla: NextFont = Karla({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Single Price Grid Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${karla.className} flex h-screen w-screen flex-col items-center justify-center bg-lightGray`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
