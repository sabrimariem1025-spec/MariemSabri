import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariem Sabri — Digital Skills & AI Trainer, Full-Stack Developer",
  description:
    "Mariem Sabri is a Digital Skills Trainer, Artificial Intelligence Trainer, and Full-Stack Developer helping people of all ages build digital confidence through practical, modern technology education.",
  keywords: [
    "Mariem Sabri",
    "Digital Skills Trainer",
    "AI Trainer",
    "ICT Trainer",
    "Full-Stack Developer",
    "Technology Educator",
    "Tunisia",
    "Saudi Arabia",
  ],
  openGraph: {
    title: "Mariem Sabri — Digital Skills & AI Trainer",
    description:
      "Empowering people through technology: Digital Skills Trainer, AI Trainer and Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
