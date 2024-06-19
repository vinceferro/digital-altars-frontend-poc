import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { WalletProvider } from "@/context/walletContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-inter ${inter.className} text-gray-900`}>
        <WalletProvider>
          <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <span className="text-2xl font-bold">Your Logo / Brand</span>
                <Navigation />
              </div>
            </header>
            <main className="flex-1 container mx-auto my-4">{children}</main>
            <footer className="bg-gray-800 text-white py-4">
              <div className="container mx-auto text-center">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}
