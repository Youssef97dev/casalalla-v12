import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Casa Lalla Takerkoust",
  description: "Exquisite cuisine and amazing panoramic view",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
