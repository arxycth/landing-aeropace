import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroPace — Run at Your Pace",
  description:
    "AeroPace membantu pelari menemukan target pace aerobik berdasarkan profil pribadi dan kondisi lingkungan.",
  keywords: [
    "AeroPace",
    "running",
    "running app",
    "aerobic pace",
    "pace tracker",
    "GPS running",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}