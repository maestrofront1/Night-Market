"use client"

import DashboardLayout from "../../app/layout";
import { useState } from "react";
import {Search, Filter, ChevronDown, Heart, ShoppingCart, Star} from "lucide-react"


// Mock product data
const products = [
    {
        id: 1,
        name: "Château Margaux 2018",
        category: "wine",
        type: "Red Wine",
        country: "France",
        price: 899,
        rating: 4.9,
        reviews: 128,
        image: "bg-gradient-to-br from-red-900/80 to-red-950/80",
        inStock: true,
        badge: "Premium",
    },
    {
        id: 2,
        name: "The Macallan 25 Year Old",
        category: "whisky",
        type: "Single Malt Scotch",
        country: "Scotland",
        price: 1299,
        rating: 4.8,
        reviews: 94,
        image: "bg-gradient-to-br from-amber-900/80 to-amber-950/80",
        inStock: true,
        badge: "Rare",
    },
    {
        id: 3,
        name: "Hennessy XO Cognac",
        category: "cognac",
        type: "Cognac",
        country: "France",
        price: 749,
        rating: 4.7,
        reviews: 156,
        image: "bg-gradient-to-br from-yellow-900/80 to-yellow-950/80",
        inStock: true,
        badge: null,
    },
    {
        id: 4,
        name: "Dom Pérignon 2012",
        category: "champagne",
        type: "Champagne",
        country: "France",
        price: 399,
        rating: 4.9,
        reviews: 213,
        image: "bg-gradient-to-br from-yellow-700/80 to-yellow-800/80",
        inStock: true,
        badge: "Popular",
    },
    {
        id: 5,
        name: "Château Lafite Rothschild 2019",
        category: "wine",
        type: "Red Wine",
        country: "France",
        price: 1299,
        rating: 5.0,
        reviews: 89,
        image: "bg-gradient-to-br from-red-900/80 to-red-950/80",
        inStock: true,
        badge: "Premium",
    },
    {
        id: 6,
        name: "Dalmore Constellation 1991",
        category: "whisky",
        type: "Single Malt Scotch",
        country: "Scotland",
        price: 3500,
        rating: 4.9,
        reviews: 42,
        image: "bg-gradient-to-br from-amber-900/80 to-amber-950/80",
        inStock: false,
        badge: "Collector",
    },
    {
        id: 7,
        name: "Patrón Extra Añejo Tequila",
        category: "tequila",
        type: "Premium Tequila",
        country: "Mexico",
        price: 599,
        rating: 4.6,
        reviews: 67,
        image: "bg-gradient-to-br from-amber-800/80 to-amber-900/80",
        inStock: true,
        badge: null,
    },
    {
        id: 8,
        name: "Clase Azul Reposado",
        category: "tequila",
        type: "Premium Tequila",
        country: "Mexico",
        price: 499,
        rating: 4.7,
        reviews: 103,
        image: "bg-gradient-to-br from-blue-900/80 to-blue-950/80",
        inStock: true,
        badge: "Popular",
    },
];

const categories = [
    { id: "all", name: "All Products", count: 8 },
    { id: "wine", name: "Wine", count: 2 },
    { id: "whisky", name: "Whisky", count: 2 },
    { id: "cognac", name: "Cognac", count: 1 },
    { id: "champagne", name: "Champagne", count: 1 },
    { id: "tequila", name: "Tequila", count: 2 },
];


export default function  Catalog ()  {


    const [showFilters, setShowFilters] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [sortBy, setSortBy] = useState("featured");
    const [searchQuery, setSearchQuery] = useState("");
    const [wishlist, setWishlist] = useState<number[]>([]);


    let filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesSearch =
            searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.country.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesPrice && matchesSearch;
    });

// Sort products
    if (sortBy === "price-low") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
        filteredProducts = [...filteredProducts].reverse();
    }

    const toggleWishlist = (productId: number) => {
        setWishlist((prev) =>
            prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
        );
    };

    return (
        <DashboardLayout>
            <section className="bg-slate-950 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    {/*<div className="mb-12">*/}
                    {/*    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Catalog</h1>*/}
                    {/*    <p className="text-gray-400 max-w-2xl">*/}
                    {/*        Explore our curated selection of premium spirits and wines from around the world.*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search products, types, or countries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 transition-colors placeholder-gray-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Filters Sidebar */}
                        <div className={`lg:col-span-1 ${!showFilters && "hidden lg:block"}`}>
                            <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 sticky top-24">
                                <div className="flex items-center justify-between mb-6 lg:hidden">
                                    <h3 className="text-lg font-bold text-white">Filters</h3>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors"
                                    >
                                        ×
                                    </button>
                                </div>

                                {/* Category Filter */}
                                <div className="mb-8 pb-8 border-b border-yellow-700/20">
                                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <Filter className="w-4 h-4" />
                                        Category
                                    </h4>
                                    <div className="space-y-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                                                    selectedCategory === cat.id
                                                        ? "bg-yellow-600/20 border border-yellow-600/40 text-yellow-400"
                                                        : "text-gray-400 hover:text-yellow-400"
                                                }`}
                                            >
                                                <span>{cat.name}</span>
                                                <span className="text-xs opacity-75">({cat.count})</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Filter */}
                                <div className="mb-8 pb-8 border-b border-yellow-700/20">
                                    <h4 className="text-white font-bold mb-4">Price Range</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-gray-400 text-sm mb-2 block">Min Price</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="5000"
                                                value={priceRange[0]}
                                                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                                className="w-full px-3 py-2 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm mb-2 block">Max Price</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="5000"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                className="w-full px-3 py-2 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                                            ${priceRange[0]} - ${priceRange[1]}
                                        </div>
                                    </div>
                                </div>

                                {/* Availability Filter */}
                                <div>
                                    <h4 className="text-white font-bold mb-4">Availability</h4>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                                        <span className="text-gray-300 text-sm">In Stock</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="lg:col-span-3">
                            {/* Toolbar */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                                <div className="flex-1">
                                    <p className="text-gray-400">
                                        Showing <span className="text-yellow-400 font-bold">{filteredProducts.length}</span> product
                                        {filteredProducts.length !== 1 ? "s" : ""}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <button
                                        onClick={() => setShowFilters(!showFilters)}
                                        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-semibold rounded-lg transition-colors"
                                    >
                                        <Filter className="w-4 h-4" />
                                        Filters
                                    </button>

                                    <div className="relative">
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="appearance-none px-4 py-2 bg-slate-900 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 transition-colors cursor-pointer pr-10"
                                        >
                                            <option value="featured">Sort by Featured</option>
                                            <option value="newest">Sort by Newest</option>
                                            <option value="price-low">Sort by Price: Low to High</option>
                                            <option value="price-high">Sort by Price: High to Low</option>
                                            <option value="rating">Sort by Highest Rated</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid */}
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="group bg-slate-900 border border-yellow-700/20 rounded-xl overflow-hidden hover:border-yellow-600/40 transition-all hover:shadow-xl hover:shadow-yellow-600/10"
                                        >
                                            {/* Product Image */}
                                            <div className={`${product.image} h-56 relative overflow-hidden border-b border-yellow-700/20`}>
                                                {product.badge && (
                                                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-600 text-slate-950 text-xs font-bold rounded-full">
                                                        {product.badge}
                                                    </div>
                                                )}

                                                {!product.inStock && (
                                                    <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
                                                        <span className="text-white font-bold text-lg">Out of Stock</span>
                                                    </div>
                                                )}

                                                <button
                                                    onClick={() => toggleWishlist(product.id)}
                                                    className="absolute bottom-4 right-4 p-3 bg-slate-900/80 rounded-lg text-gray-300 hover:text-red-400 hover:bg-slate-900 transition-colors"
                                                >
                                                    <Heart
                                                        className="w-5 h-5"
                                                        fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                                                    />
                                                </button>
                                            </div>

                                            {/* Product Info */}
                                            <div className="p-6">
                                                <p className="text-gray-500 text-xs uppercase font-semibold mb-2">
                                                    {product.country} • {product.type}
                                                </p>
                                                <h3 className="text-white font-bold text-lg line-clamp-2 mb-3 h-14">
                                                    {product.name}
                                                </h3>

                                                {/* Rating */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${
                                                                    i < Math.floor(product.rating)
                                                                        ? "text-yellow-400 fill-yellow-400"
                                                                        : "text-gray-600"
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-yellow-400 font-bold text-sm">{product.rating}</span>
                                                    <span className="text-gray-500 text-xs">({product.reviews})</span>
                                                </div>

                                                {/* Price */}
                                                <div className="mb-4 pb-4 border-b border-yellow-700/20">
                                                    <p className="text-yellow-400 font-bold text-2xl">${product.price}</p>
                                                </div>

                                                {/* Add to Cart Button */}
                                                <button
                                                    disabled={!product.inStock}
                                                    className={`w-full px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                                                        product.inStock
                                                            ? "bg-yellow-600 hover:bg-yellow-700 text-slate-950"
                                                            : "bg-slate-800 text-gray-500 cursor-not-allowed"
                                                    }`}
                                                >
                                                    <ShoppingCart className="w-5 h-5" />
                                                    {product.inStock ? "Add to Cart" : "Unavailable"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-400 text-lg">No products found matching your filters.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </DashboardLayout>

    )
}