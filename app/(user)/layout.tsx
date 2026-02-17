import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BracketTextProcessor from "../components/common/BracketTextProcessor";
import { JobSelectContextProvider } from "@/contexts/jobSelectContext";
import { Toaster } from "@/components/ui/sonner";

const suisseIntl = localFont({
  src: [
    {
      path: "../../public/fonts/suisseIntl/SuisseIntl-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/suisseIntl/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/suisseIntl/SuisseIntl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/suisseIntl/SuisseIntl-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/suisseIntl/SuisseIntl-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse-intl",
});

const suisseIntlMono = localFont({
  src: [
    {
      path: "../../public/fonts/suisseIntl/SuisseIntlMono.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-suisse-intl-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "United Engineering Construction | Top Construction Company in UAE	",
  description:
    "UNEC is one of the top Construction Companies in UAE. Established in 1976, We are a multi-award-winning General Contracting Company with a portfolio spanning local &amp; regional markets: Dubai, Abu Dhabi, and Sharjah.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suisseIntl.variable} ${suisseIntlMono.variable} font-sans antialiased`}
      >
        <JobSelectContextProvider>
          <Navbar />
          <BracketTextProcessor />
          <Toaster
            position="bottom-right"
            duration={2500}
            toastOptions={{
              className: "!bg-black !text-white !border !border-white",
            }}
          />

          {children}
          <Footer />
        </JobSelectContextProvider>
      </body>
    </html>
  );
}
