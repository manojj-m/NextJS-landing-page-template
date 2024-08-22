import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evaluate Learning",
  description: "Personalised Feedback for Assignments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "grainy flex flex-col font-sans antialiased w-full",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
