import "./globals.css";
import { headers } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  headers();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
