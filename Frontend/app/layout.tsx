import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";


const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://efemesudiyeli.dev'),
  title: {
    default: "Efe Mesudiyeli - iOS Developer Portfolio",
    template: "%s | Efe Mesudiyeli - iOS Developer"
  },
  icons: {
    icon: '/favicon-new.ico',
    shortcut: '/favicon-new.ico',
    apple: '/apple-touch-icon.png',
  },
  description: "iOS Developer Efe Mesudiyeli'nin portfolyo sitesi. Swift, SwiftUI ve UIKit ile geliştirilmiş mobil uygulamalar, projeler ve blog yazıları.",
  keywords: [
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "UIKit",
    "Mobile Development",
    "iOS Apps",
    "App Store",
    "Portfolio",
    "Efe Mesudiyeli",
    "iOS Geliştirici",
    "Mobil Uygulama",
    "iPhone App",
    "iPad App"
  ],
  authors: [{ name: "Efe Mesudiyeli", url: "https://efemesudiyeli.dev" }],
  creator: "Efe Mesudiyeli",
  publisher: "Efe Mesudiyeli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://efemesudiyeli.dev",
    siteName: "Efe Mesudiyeli - iOS Developer Portfolio",
    title: "Efe Mesudiyeli - iOS Developer Portfolio",
    description: "iOS Developer Efe Mesudiyeli'nin portfolyo sitesi. Swift, SwiftUI ve UIKit ile geliştirilmiş mobil uygulamalar, projeler ve blog yazıları.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Efe Mesudiyeli - iOS Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efe Mesudiyeli - iOS Developer Portfolio",
    description: "iOS Developer Efe Mesudiyeli'nin portfolyo sitesi. Swift, SwiftUI ve UIKit ile geliştirilmiş mobil uygulamalar, projeler ve blog yazıları.",
    images: ["/og-image.jpg"],
    creator: "@efemesudiyeli",
  },
  alternates: {
    canonical: "https://efemesudiyeli.dev",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Efe Mesudiyeli",
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QVW4203M8E"></Script>
        <Script id="gtag-init">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);} 
  gtag('js', new Date());
  gtag('config', 'G-QVW4203M8E');
`}</Script>
      </head>
      <body
        className={`${helveticaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
