import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { type Metadata, type Viewport } from "next";
import { type ReactNode } from "react";
import { Providers } from "./providers";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "Eunovia",
  description: "Eunovia (유노비아)",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className="min-h-screen text-foreground bg-brand-background">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <NuqsAdapter>
            <Header />
            <main className="max-w-[77rem] mx-auto min-h-[calc(100dvh-60px)] flex flex-col">
              {children}
            </main>
            <Footer />
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}
