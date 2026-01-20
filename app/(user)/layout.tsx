import type { Metadata } from "next";
import localFont from 'next/font/local';
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BracketTextProcessor from "../components/common/BracketTextProcessor";


const suisseIntl = localFont({
  src: [
    {
      path: '../../public/fonts/suisseintl/SuisseIntl-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suisseintl/SuisseIntl-Regular.woff2',
      weight: '400',
      style: 'normal',
    }, 
    {
      path: '../../public/fonts/suisseintl/SuisseIntl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suisseintl/SuisseIntl-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suisseintl/SuisseIntl-Bold.woff2',
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
      <body className={`${suisseIntl.variable} font-sans antialiased`} >
      <Navbar />
      <BracketTextProcessor/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
