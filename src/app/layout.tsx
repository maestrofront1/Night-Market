import Header from "@/features/Header/Index";
import React from "react";
import "./globals.css"
import { Inter } from 'next/font/google';
import Footer from "@/features/Footer/Index"
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="flex flex-col min-h-screen bg-slate-950 items-center">
        <body>
        {/* Layout UI */}
        <Header/>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}