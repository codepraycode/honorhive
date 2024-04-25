import "@/styles/style.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import siteData from '@/site.json';


const inter = Inter({ subsets: ["latin"] });
const siteTitle = siteData.title
const siteTagline = siteData.tagline

export const metadata: Metadata = {
    title: `${siteTitle} | ${siteTagline}`,
    description: siteTagline,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
