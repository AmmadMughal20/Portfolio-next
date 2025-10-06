import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Suspense } from 'react';
import Script from 'next/script';


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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WC55BFL2');
    `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC55BFL2"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Suspense fallback={<div>Loading...</div>}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </Suspense>
      </body>
    </html >
  );
}
