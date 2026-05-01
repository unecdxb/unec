import type { Metadata } from "next";
import "../../../app/globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "UNEC | Backend Console",
  description: "UNEC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className={`antialiased overflow-x-hidden overflow-y-hidden`}>
        <Toaster />
        {children}
      </div>
    </div>
  );
}