import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mercedes Benz",
  description: "Experience unmatched luxury and performance with Mercedes Benz. Our collection features the iconic C-Class Sedans, elegant E-Class Sedans, versatile E-Class Wagons, cutting-edge EQS Sedans, and the pinnacle of luxury with Maybach Sedans. Discover the perfect blend of style, technology, and craftsmanship that defines the Mercedes legacy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
     </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
