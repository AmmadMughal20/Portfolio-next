import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Suspense } from 'react';


export const metadata: Metadata = {
  title: "Muhammad Ammad - Portfolio",
  description: "SPA Portfolio website of Muhammad Ammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
