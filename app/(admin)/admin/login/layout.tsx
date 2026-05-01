export const metadata = {
  title: "UNEC | Backend Console",
  description: "UNEC",
};

import "../../../globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <div>{children}</div>
    </div>
  );
}