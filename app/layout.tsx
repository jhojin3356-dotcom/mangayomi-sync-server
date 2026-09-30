import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SeasonalBackgroundProvider } from "@/components/layout/seasonal-background-provider";
import "./globals.css";



export const metadata: Metadata = {
  title: "Mangayomi Sync Server",
  description:
    "Self-hosted sync for your Mangayomi library, history, updates and tracking data.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">): Promise<React.ReactElement> {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`dark  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <SeasonalBackgroundProvider>
            <div className="flex flex-1 flex-col">{children}</div>
            <SiteFooter />
          </SeasonalBackgroundProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
