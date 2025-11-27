"use client"
import { useState } from "react";
import {
    Trash2,
    Plus,
    Minus,
    ShoppingCart,
    Truck,
    Lock,
    ArrowRight,
} from "lucide-react";
import DashboardLayout from "@/app/layout";
import Link from "next/link";


export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Château Margaux 2018",
            type: "Red Wine",
            country: "France",
            price: 899,
            quantity: 1,
            image: "bg-gradient-to-br from-red-900/80 to-red-950/80",
        },
        {
            id: 2,
            name: "The Macallan 25 Year Old",
            type: "Single Malt Scotch",
            country: "Scotland",
            price: 1299,
            quantity: 1,
            image: "bg-gradient-to-br from-amber-900/80 to-amber-950/80",
        },
        {
            id: 4,
            name: "Dom Pérignon 2012",
            type: "Champagne",
            country: "France",
            price: 399,
            quantity: 2,
            image: "bg-gradient-to-br from-yellow-700/80 to-yellow-800/80",
        },
    ]);

    const [shippingMethod, setShippingMethod] = useState("standard");
    const [appliedCoupon, setAppliedCoupon] = useState("");
    const [couponInput, setCouponInput] = useState("");

    // Shipping options
    const shippingOptions = [
        { id: "standard", name: "Standard Delivery (5-7 business days)", cost: 25 },
        { id: "express", name: "Express Delivery (2-3 business days)", cost: 75 },
        { id: "overnight", name: "Overnight Delivery (Next business day)", cost: 150 },
    ];

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = shippingOptions.find((opt) => opt.id === shippingMethod)?.cost || 25;
    const discountAmount = appliedCoupon === "LUXURY20" ? subtotal * 0.2 : 0;
    const taxAmount = (subtotal - discountAmount) * 0.1;
    const total = subtotal - discountAmount + taxAmount + shippingCost;

    // Cart operations
    const updateQuantity = (itemId: number, newQuantity: number) => {
        if (newQuantity < 1) {
            removeItem(itemId);
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === itemId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const removeItem = (itemId: number) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const applyCoupon = () => {
        if (couponInput.length > 0) {
            setAppliedCoupon(couponInput);
            setCouponInput("");
        }
    };

    const removeCoupon = () => {
        setAppliedCoupon("");
    };

    if (cartItems.length === 0) {
        return (
            <DashboardLayout>
                <section className="bg-slate-950 min-h-screen py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shopping Cart</h1>
                            <p className="text-gray-400">Your cart is empty</p>
                        </div>

                        {/* Empty State */}
                        <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-12 text-center">
                            <ShoppingCart className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
                            <p className="text-gray-400 mb-8">
                                Add premium spirits and wines to your cart to get started.
                            </p>
                            <Link
                                href="/Catalog"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-semibold rounded-lg transition-colors"
                            >
                                Continue Shopping
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <section className="bg-slate-950 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shopping Cart</h1>
                        <p className="text-gray-400">
                            You have <span className="text-yellow-400 font-bold">{cartItems.length}</span> item
                            {cartItems.length !== 1 ? "s" : ""} in your cart
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 hover:border-yellow-600/40 transition-colors"
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Product Image */}
                                        <div className={`${item.image} rounded-lg w-full sm:w-32 h-32 flex-shrink-0 border border-yellow-700/20`} />

                                        {/* Product Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                                                    {item.country} • {item.type}
                                                </p>
                                                <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center border border-yellow-700/20 rounded-lg bg-slate-800">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 text-yellow-400 hover:bg-slate-700 transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="px-4 py-2 text-white font-semibold text-center w-12">
                            {item.quantity}
                          </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 text-yellow-400 hover:bg-slate-700 transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="ml-auto px-4 py-2 text-red-400 hover:bg-red-600/10 rounded-lg transition-colors flex items-center gap-2"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    <span className="hidden sm:inline">Remove</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-yellow-400 font-bold text-2xl mb-2">
                                                ${(item.price * item.quantity).toLocaleString()}
                                            </p>
                                            <p className="text-gray-400 text-sm">${item.price} each</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Continue Shopping Link */}
                            <div className="pt-4">
                                <Link
                                    href="/Catalog"
                                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                                >
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 sticky top-24 space-y-6">
                                <h2 className="text-2xl font-bold text-white">Order Summary</h2>

                                {/* Coupon Section */}
                                <div className="pb-6 border-b border-yellow-700/20">
                                    <label className="block text-gray-400 text-sm mb-2">Promo Code</label>
                                    {appliedCoupon ? (
                                        <div className="flex items-center gap-2 bg-green-600/10 border border-green-600/30 rounded-lg px-3 py-2">
                                            <span className="text-green-400 font-semibold flex-1">Coupon: {appliedCoupon}</span>
                                            <button
                                                onClick={removeCoupon}
                                                className="text-green-400 hover:text-green-300 transition-colors"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Enter code"
                                                value={couponInput}
                                                onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                                                className="flex-1 px-3 py-2 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 transition-colors placeholder-gray-500 text-sm"
                                            />
                                            <button
                                                onClick={applyCoupon}
                                                className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-semibold rounded-lg transition-colors text-sm"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    )}
                                    <p className="text-gray-500 text-xs mt-2">Try "LUXURY20" for a special offer</p>
                                </div>

                                {/* Shipping Method */}
                                <div className="pb-6 border-b border-yellow-700/20">
                                    <label className="block text-white font-bold mb-3 flex items-center gap-2">
                                        <Truck className="w-5 h-5 text-yellow-600" />
                                        Delivery Method
                                    </label>
                                    <div className="space-y-2">
                                        {shippingOptions.map((option) => (
                                            <label
                                                key={option.id}
                                                className="flex items-center gap-3 p-3 border border-yellow-700/20 rounded-lg hover:border-yellow-600/40 cursor-pointer transition-colors"
                                            >
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    value={option.id}
                                                    checked={shippingMethod === option.id}
                                                    onChange={(e) => setShippingMethod(e.target.value)}
                                                    className="w-4 h-4 cursor-pointer"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-white text-sm font-medium">{option.name}</p>
                                                </div>
                                                <p className="text-yellow-400 font-bold text-sm">+${option.cost}</p>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Calculations */}
                                <div className="space-y-3 pb-6 border-b border-yellow-700/20">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Subtotal</span>
                                        <span className="text-white font-semibold">${subtotal.toLocaleString()}</span>
                                    </div>

                                    {discountAmount > 0 && (
                                        <div className="flex justify-between items-center text-green-400">
                                            <span>Discount (20%)</span>
                                            <span className="font-semibold">-${discountAmount.toLocaleString()}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Tax (10%)</span>
                                        <span className="text-white font-semibold">${taxAmount.toLocaleString()}</span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Shipping</span>
                                        <span className="text-white font-semibold">${shippingCost.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-white font-bold text-lg">Total</span>
                                    <span className="text-yellow-400 font-bold text-3xl">${total.toLocaleString()}</span>
                                </div>

                                {/* Checkout Button */}
                                <button className="w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                                    <Lock className="w-5 h-5" />
                                    Proceed to Checkout
                                </button>

                                {/* Security Badge */}
                                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs pt-4 border-t border-yellow-700/20">
                                    <Lock className="w-4 h-4" />
                                    <span>Secure checkout powered by industry standards</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}
