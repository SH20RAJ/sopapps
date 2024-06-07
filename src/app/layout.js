import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SopApp",
  description: "Download Android apps and games for free",
  openGraph: {
    title: "SopApp",
    description: "Download Android apps and games for free",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SopApp logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SopApp",
    description: "Download Android apps and games for free",
    images: ["/logo.png"],
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
