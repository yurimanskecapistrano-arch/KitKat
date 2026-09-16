import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KITKAT // LOST ARCHIVE",
  description: "our little universe — an archive made for two people.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
