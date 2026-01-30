import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shanmuganathan Somashekar | Data Scientist, ML Engineer, Data Analyst, BI",
  description:
    "Data Scientist & ML Engineer with 3+ years delivering analytics, ML, Gen AI (RAG, LangChain, LLMs), and BI at scale. Fit for Data Analyst, Data Science, ML/AI Engineering, and Business Intelligence roles.",
  keywords: [
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "ML Engineer",
    "AI Engineer",
    "RAG",
    "LangChain",
    "LLM",
    "Gen AI",
    "Business Intelligence",
    "BI",
    "Applied AI Engineer",
    "NLP",
    "Data Engineering",
    "Analytics",
    "Cloud",
  ],
  authors: [{ name: "Shanmuganathan Somashekar" }],
  creator: "Shanmuganathan Somashekar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shan-portfolio.vercel.app",
    title: "Shanmuganathan Somashekar | Data Scientist, ML Engineer, Data Analyst, BI",
    description:
      "Data & ML professional: analytics, ML systems, and BI. Fit for Data Analyst, Data Scientist, ML/AI Engineer, and Business Intelligence roles.",
    siteName: "Shan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmuganathan Somashekar | Data Scientist, ML Engineer, Data Analyst, BI",
    description:
      "Data & ML professional: analytics, ML systems, and BI. Fit for Data Analyst, Data Scientist, ML/AI Engineer, and Business Intelligence roles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
