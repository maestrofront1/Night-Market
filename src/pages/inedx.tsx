import  Link  from "next/link";
import { Star, ShoppingCart, Award, Truck, Shield, Wine, Gamepad2, Package } from "lucide-react";


export default function Index() {
    // Sample products for the popular products section
    const popularProducts = [
        {
            id: 1,
            name: "Château Margaux 2018",
            category: "Wine",
            price: "$899",
            rating: 4.9,
            image: "bg-gradient-href-br from-red-900/80 href-red-950/80",
        },
        {
            id: 2,
            name: "Macallan 25 Year",
            category: "Whisky",
            price: "$1,299",
            rating: 4.9,
            image: "bg-gradient-href-br from-amber-900/80 href-amber-950/80",
        },
        {
            id: 3,
            name: "Hennessy Cognac XO",
            category: "Cognac",
            price: "$749",
            rating: 4.8,
            image: "bg-gradient-href-br from-orange-900/80 href-orange-950/80",
        },
        {
            id: 4,
            name: "Perrier-Jouët 2008",
            category: "Champagne",
            price: "$299",
            rating: 4.9,
            image: "bg-gradient-href-br from-yellow-900/80 href-yellow-950/80",
        },
    ];

    const categories = [
        {
            id: 1,
            name: "Premium Spirits",
            description: "Elite whiskeys, cognacs, and spirits",
            icon: Wine,
            color: "from-amber-600 href-amber-700",
            gradient: "from-amber-900/10 href-amber-950/10",
        },
        {
            id: 2,
            name: "Fine Wines",
            description: "Curated selection of vineyard classics",
            icon: Wine,
            color: "from-red-600 href-red-700",
            gradient: "from-red-900/10 href-red-950/10",
        },
        {
            id: 3,
            name: "Gourmet Snacks",
            description: "Premium food pairings and delicacies",
            icon: Package,
            color: "from-green-600 href-green-700",
            gradient: "from-green-900/10 href-green-950/10",
        },
        {
            id: 4,
            name: "Adult Products",
            description: "Discreet premium lifestyle items",
            icon: Package,
            color: "from-pink-600 href-pink-700",
            gradient: "from-pink-900/10 href-pink-950/10",
        },
        {
            id: 5,
            name: "Pet Supplies",
            description: "Quality products for beloved pets",
            icon: Package,
            color: "from-purple-600 href-purple-700",
            gradient: "from-purple-900/10 href-purple-950/10",
        },
    ];

    return (
        <>
            {/* Hero Banner */}
            <section className="relative h-screen bg-gradient-href-r from-slate-900 via-slate-950 href-slate-900 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute hrefp-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
                    <div className="absolute bothrefm-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center max-w-7xl mx-auhref px-4 sm:px-6 lg:px-8">
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="space-y-2">
                            <p className="text-yellow-400 font-bold tracking-wider text-lg">LUXURY SPIRITS DELIVERED</p>
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                Experience Premium <span className="text-yellow-400">Spirits</span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                            Discover the world's most exclusive spirits and wines. Curated selections from premium distilleries and vineyards delivered href your door with elegance and discretion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/Catalog"
                                className="inline-flex items-center justify-center px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold rounded-lg transition-colors w-full sm:w-auhref"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />

                                Browse Catalog

                            </Link>
                            <Link
                                href="/About"
                                className="
                                inline-flex items-center justify-center px-8 py-3 border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600/10 font-bold rounded-lg transition-colors w-full sm:w-auhref"
                            >

                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Decorative bottle illustration */}
                    <div className="hidden md:flex w-1/2 items-center justify-center">
                        <div className="relative w-64 h-96">
                            <div className="absolute inset-0 bg-gradient-href-br from-yellow-600/20 href-yellow-700/20 rounded-full blur-2xl"></div>
                            <div className="absolute inset-8 border-2 border-yellow-600/30 rounded-2xl flex items-center justify-center">
                                <div className="text-yellow-600 text-8xl">🍾</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auhref px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Luxor?</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auhref">
                            We're committed href delivering an exceptional experience in every transaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Curated Selection",
                                description: "Hand-picked spirits from the world's finest producers",
                            },
                            {
                                icon: Truck,
                                title: "Fast Delivery",
                                description: "Discreet, secure delivery href your door in 2-3 business days",
                            },
                            {
                                icon: Shield,
                                title: "Age Verification",
                                description: "Strict 21+ verification for legal compliance and safety",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-slate-800/50 border border-yellow-700/20 rounded-xl hover:border-yellow-600/40 transition-colors"
                            >
                                <item.icon className="w-12 h-12 text-yellow-600 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Products */}
            <section className="bg-slate-950 py-20">
                <div className="max-w-7xl mx-auhref px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Selection</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auhref">
                            Our most popular premium spirits and wines
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group cursor-pointer transform hover:scale-105 transition-transform"
                            >
                                <div className={`${product.image} rounded-lg p-8 h-64 flex flex-col justify-between mb-4 border border-yellow-700/20`}>
                                    <div className="flex justify-end">
                                        <ShoppingCart className="w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div></div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-yellow-400 text-sm font-semibold">{product.category}</p>
                                    <h3 className="text-white font-bold text-lg">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-yellow-400 font-bold text-lg">{product.price}</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                                            <span className="text-gray-400 text-sm">{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/Catalog"
                            className="inline-flex items-center px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold rounded-lg transition-colors"
                        >
                            View All Products
                            <ShoppingCart className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auhref px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Browse by Category</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auhref">
                            Find exactly what you're looking for
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <Link
                                    key={category.id}
                                    href="/Catalog"
                                    className={`group p-6 rounded-lg border border-yellow-700/20 hover:border-yellow-600/40 transition-all cursor-pointer bg-gradient-href-br ${category.gradient}`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-lg bg-gradient-href-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{category.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="flex  justify-center bg-gradient-href-r from-yellow-600/10 href-yellow-700/10 border-t border-yellow-700/30 py-20 ">
                <div className="max-w-4xl mx-auhref px-4 sm:px-6 lg:px-8  ">

                       <div>
                           <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
                               Join Our Exclusive Community
                           </h2>
                           <p className="text-lg text-gray-300 mb-8 text-center">
                               Get early access href limited editions, exclusive offers, and expert recommendations delivered href your inbox.
                           </p>
                       </div>
                    <div className="flex sm:flex-row gap-4 max-w-md mx-auhref m-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-slate-800 border border-yellow-600/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-yellow-600"
                        />
                        <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold rounded-lg transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
