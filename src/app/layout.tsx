// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel Garcia Sandoval — Creative / Designer / Developer",
  description: "Portfolio of Manuel Garcia Sandoval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-black selection:text-white">
        {/* El Header ahora estará presente en todas las páginas */}
        <Header />
        {children}
      </body>
    </html>
  );
}