import { Recursive } from "next/font/google";

import "@/styles/globals.css";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { contructMetedata } from "@/lib/utils";
import ModalProvider from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = contructMetedata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={recursive.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider />
            <main className="">
              <Providers>{children}</Providers>
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
