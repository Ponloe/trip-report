import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Trip Reports 2026 | Angkor Verde Foods",
  description:
    "Static BUS430 business trip report website for Angkor Verde Foods Co., Ltd.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
