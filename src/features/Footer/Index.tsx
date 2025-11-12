import  Link  from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-yellow-700/30 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">𝔏</span>
                            </div>
                            <h3 className="text-white font-bold text-lg">Luxor</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium spirits and elite beverages for the most discerning palate. Experience luxury in every sip.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalog" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    Catalog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Phone className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">support@luxor.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">123 Premium Ave, New York, NY</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Links and Copyright */}
                <div className="border-t border-yellow-700/30 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; 2024 Luxor Premium Spirits. All rights reserved. Must be 21+ to purchase.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
