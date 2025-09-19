import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const jetbrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    template: "%s - The Lockbox",
    default: "The Lockbox"
  },
  description: "A private and secure platform for message dropping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
