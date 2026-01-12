import type { Metadata } from "next";
import localFont from 'next/font/local';
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BracketTextProcessor from "../components/common/BracketTextProcessor";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const suisseIntl = localFont({
  src: [
    {
      path: '../../public/fonts/suisseIntl/SuisseIntl-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suisseIntl/SuisseIntl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suisseIntl/SuisseIntl-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-suisse-intl',
});

export const metadata: Metadata = {
  title: "United Engineering Construction | Top Construction Company in UAE	",
  description: "UNEC is one of the top Construction Companies in UAE. Established in 1976, We are a multi-award-winning General Contracting Company with a portfolio spanning local &amp; regional markets: Dubai, Abu Dhabi, and Sharjah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suisseIntl.variable} antialiased`} >
      <Navbar />
      <BracketTextProcessor/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
