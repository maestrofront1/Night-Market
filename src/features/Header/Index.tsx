"use client"

import Link  from "next/link";
import {ShoppingCart, Menu, X, User, Contact} from "lucide-react";
import { useState } from "react";
import Catalog from "@/pages/Catalog";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Cart from "@/pages/Cart";

export default function Header ()   {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-950 border-b border-yellow-700/30 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">𝔏</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-lg">Luxor</span>
                            <span className="text-yellow-600 text-xs font-semibold">PREMIUM SPIRITS</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/Catalog" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                               Catalog
                        </Link>
                        <Link href="/About" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                            About Us
                        </Link>
                        <Link href="/Blog" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                            Blog
                        </Link>
                        <Link href="/Contact" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* Cart, Account and Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <Link href="/Account" className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <User className="w-6 h-6" />
                        </Link>
                        <Link href="/Cart" className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-yellow-400"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden pb-4 space-y-3">
                        <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                            Home
                        </Link>
                        <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                            <Catalog />
                            Catalog
                        </Link>
                        <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                            <About/>
                            About Us
                        </Link>
                        <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                            <Blog/>
                            Blog
                        </Link>
                        <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                            <Contact/>
                            Contact
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
