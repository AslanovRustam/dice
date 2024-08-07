import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Dice",
  description: "Dice app for Zionix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/dice.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
