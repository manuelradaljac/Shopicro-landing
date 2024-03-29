import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopicro",
  description: "Moderni CMS za webshopove",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
