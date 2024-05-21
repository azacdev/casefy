import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casiefy",
  description: "Your image on a custom phone case",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={recursive.className}>
        <SessionProvider session={session}>
          <Navbar />
          <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </main>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
