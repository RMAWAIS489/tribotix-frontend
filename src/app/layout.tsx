import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google";

// DM Sans font with multiple weights
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // 400 for paragraph, 600 for heading
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

