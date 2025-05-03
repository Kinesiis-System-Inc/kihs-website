import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import RootLayoutClient from "./RootLayoutClient";
import { footerQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "KIHS",
  description: "Kullolli Institute of Health Services",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = await client.fetch(footerQuery);

  return (
    <html lang="en">
      <body className={`${poppins.className} scrollbar-hide`}>
        <ToastContainer />
        <RootLayoutClient footerData={footerData}>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}