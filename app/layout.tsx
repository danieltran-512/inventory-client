import NavBar from "@/components/NavBar";
import { Providers } from "@/components/Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Factory",
  description: "Demo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
