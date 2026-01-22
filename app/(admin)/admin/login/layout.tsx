export const metadata = {
  title: "UNEC | Backend Console",
  description: "UNEC",
};

import "../../../globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}