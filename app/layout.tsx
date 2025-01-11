import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sprezzatura Travel - Luxury Hotels & Exclusive Benefits",
  description: "Experience the world's finest hotels with exclusive rates and unparalleled benefits through Sprezzatura Travel.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black antialiased">
        {children}
      </body>
    </html>
  );
}
