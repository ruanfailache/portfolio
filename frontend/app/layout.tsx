import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { headers, cookies } from "next/headers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ruanfailache.com"
  ),
  title: {
    default: "Ruan Failache | Senior Full Stack Developer",
    template: "%s | Ruan Failache",
  },
  description:
    "I build high impact systems that scale, and I bring AI to the teams behind them so they move faster.",
  openGraph: {
    type: "website",
    siteName: "Ruan Failache",
    locale: "en_US",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [nonce, cookieStore] = await Promise.all([
    headers().then((h) => h.get("x-nonce") ?? ""),
    cookies(),
  ]);
  const locale = cookieStore.get("rf-lang")?.value ?? "en";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${dmSans.variable} ${inter.variable}`}
    >
      <head>
        {/* Prevent flash of wrong theme before hydration */}
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rf-theme');if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
