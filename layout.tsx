import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactActions } from "@/components/layout/ContactActions";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/data/site";

const sans = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Swimming Pool Contractors Gauteng | ${site.name}`, template: `%s | ${site.name}` },
  description:
    "New pools, pool renovations, resurfacing, coping, paving and outdoor entertainment areas across Sandton, Fourways, Midrand, Pretoria and greater Gauteng.",
  applicationName: site.name,
  formatDetection: { telephone: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={sans.variable}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactActions />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
