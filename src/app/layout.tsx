import { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import "@styles/global.css";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Refine",
};

const ToastProvider = dynamic(() => import("@providers/toast"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <ToastProvider />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
