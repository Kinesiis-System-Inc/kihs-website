"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/Components/NavBar/NavBar";
import { Footer } from "@/Components/Footer/Footer";
import MotionWrapper from "@/Components/MotionWrapper";
import { FooterData } from "@/libs/types";

type RootLayoutClientProps = {
  children: React.ReactNode;
  footerData: FooterData; // You can replace `any` with a proper `FooterData` type
};

export default function RootLayoutClient({ children, footerData }: RootLayoutClientProps) {
  const pathname = usePathname();

  const noHeaderFooterRoutes = ["/studio"];
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.some(route =>
    pathname.startsWith(route)
  );

  return (
    <>
      {shouldShowHeaderFooter && <Navbar />}
      <main className={`h-max min-h-[200px] md:min-h-[500px] ${shouldShowHeaderFooter ? "mt-[136px]" : ""} box-border`}>
        <MotionWrapper>{children}</MotionWrapper>
      </main>
      {shouldShowHeaderFooter && <Footer data={footerData} />}
    </>
  );
}