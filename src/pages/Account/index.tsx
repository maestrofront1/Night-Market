"use client"
import {
    User,
    MapPin,
    Heart,
    LogOut,
    Edit2,
    Package,
    Settings,
    ChevronRight,
    Clock,
    DollarSign,
} from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/app/layout";

export default function Account() {
    const [activeTab, setActiveTab] = useState("profile");
    const [isEditing, setIsEditing] = useState(false);

    // Mock user data
    const userData = {
        name: "John Anderson",
        email: "john.anderson@example.com",
        phone: "+1 (555) 123-4567",
        joinDate: "March 2024",
        avatar: "JA",
    };

    // Mock order history
    const orders = [
        {
            id: "ORD-001",
            date: "2024-01-15",
            items: "Château Margaux 2018",
            total: "$899.00",
            status: "Delivered",
        },
        {
            id: "ORD-002",
            date: "2024-01-10",
            items: "Macallan 25 Year, Hennessy XO",
            total: "$2,048.00",
            status: "Delivered",
        },
        {
            id: "ORD-003",
            date: "2024-01-05",
            items: "Perrier-Jouët 2008",
            total: "$299.00",
            status: "In Transit",
        },
    ];

    // Mock addresses
    const addresses = [
        {
            id: 1,
            type: "Home",
            name: "John Anderson",
            street: "123 Premium Avenue",
            city: "New York, NY 10001",
            country: "United States",
            isDefault: true,
        },
        {
            id: 2,
            type: "Work",
            name: "John Anderson",
            street: "456 Business Plaza",
            city: "New York, NY 10002",
            country: "United States",
            isDefault: false,
        },
    ];

    // Mock wishlist
    const wishlist = [
        {
            id: 1,
            name: "Château Lafite Rothschild 2019",
            price: "$1,299",
            addedDate: "2024-01-12",
            image: "bg-gradient-to-br from-red-900/80 to-red-950/80",
        },
        {
            id: 2,
            name: "Dalmore Constellation 1991",
            price: "$3,500",
            addedDate: "2024-01-08",
            image: "bg-gradient-to-br from-amber-900/80 to-amber-950/80",
        },
        {
            id: 3,
            name: "Dom Pérignon 2012",
            price: "$399",
            addedDate: "2024-01-01",
            image: "bg-gradient-to-br from-yellow-900/80 to-yellow-950/80",
        },
    ];

    return (
        <DashboardLayout>
            <section className="bg-slate-950 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                        {/* Profile Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 sticky top-24">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-white font-bold text-2xl">{userData.avatar}</span>
                                    </div>
                                    <h2 className="text-white font-bold text-lg text-center">{userData.name}</h2>
                                    <p className="text-gray-400 text-sm text-center">{userData.email}</p>
                                </div>

                                <div className="space-y-1 mb-6 pb-6 border-b border-yellow-700/20">
                                    <p className="text-gray-400 text-xs">Member Since</p>
                                    <p className="text-white font-semibold">{userData.joinDate}</p>
                                </div>

                                {/* Navigation */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setActiveTab("profile")}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                            activeTab === "profile"
                                                ? "bg-yellow-600/20 border border-yellow-600/40 text-yellow-400"
                                                : "text-gray-400 hover:text-yellow-400"
                                        }`}
                                    >
                                        <User className="w-5 h-5" />
                                        <span className="font-medium">Profile</span>
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("orders")}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                            activeTab === "orders"
                                                ? "bg-yellow-600/20 border border-yellow-600/40 text-yellow-400"
                                                : "text-gray-400 hover:text-yellow-400"
                                        }`}
                                    >
                                        <Package className="w-5 h-5" />
                                        <span className="font-medium">Orders</span>
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("addresses")}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                            activeTab === "addresses"
                                                ? "bg-yellow-600/20 border border-yellow-600/40 text-yellow-400"
                                                : "text-gray-400 hover:text-yellow-400"
                                        }`}
                                    >
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-medium">Addresses</span>
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("wishlist")}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                            activeTab === "wishlist"
                                                ? "bg-yellow-600/20 border border-yellow-600/40 text-yellow-400"
                                                : "text-gray-400 hover:text-yellow-400"
                                        }`}
                                    >
                                        <Heart className="w-5 h-5" />
                                        <span className="font-medium">Wishlist</span>
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("settings")}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                            activeTab === "settings"
                                                ? "bg-yellow-600/20 border border-yellow-600/40 text-yellow-400"
                                                : "text-gray-400 hover:text-yellow-400"
                                        }`}
                                    >
                                        <Settings className="w-5 h-5" />
                                        <span className="font-medium">Settings</span>
                                    </button>
                                </div>

                                <button className="w-full mt-6 px-4 py-3 border border-red-600/30 text-red-400 hover:bg-red-600/10 rounded-lg flex items-center justify-center gap-2 transition-all">
                                    <LogOut className="w-5 h-5" />
                                    <span className="font-medium">Sign Out</span>
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Profile Tab */}
                            {activeTab === "profile" && (
                                <div className="space-y-6">
                                    <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                            <h3 className="text-2xl font-bold text-white">Personal Information</h3>
                                            <button
                                                onClick={() => setIsEditing(!isEditing)}
                                                className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-semibold rounded-lg transition-colors"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                                {isEditing ? "Done" : "Edit"}
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    disabled={isEditing}
                                                    defaultValue={userData.name}
                                                    className="w-full px-4 py-3 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    disabled={isEditing}
                                                    defaultValue={userData.email}
                                                    className="w-full px-4 py-3 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    disabled={isEditing}
                                                    defaultValue={userData.phone}
                                                    className="w-full px-4 py-3 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-400 text-sm mb-2">Member Since</label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    defaultValue={userData.joinDate}
                                                    className="w-full px-4 py-3 bg-slate-800 border border-yellow-700/20 text-white rounded-lg focus:outline-none focus:border-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Orders Tab */}
                            {activeTab === "orders" && (
                                <div className="space-y-6">
                                    <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 md:p-8">
                                        <h3 className="text-2xl font-bold text-white mb-6">Order History</h3>

                                        <div className="space-y-4">
                                            {orders.map((order) => (
                                                <div
                                                    key={order.id}
                                                    className="border border-yellow-700/20 rounded-lg p-4 md:p-6 hover:border-yellow-600/40 transition-colors cursor-pointer"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Package className="w-5 h-5 text-yellow-600" />
                                                                <span className="font-bold text-white">{order.id}</span>
                                                            </div>
                                                            <p className="text-gray-400 text-sm mb-2">{order.items}</p>
                                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                                <span className="text-gray-400 flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                    {order.date}
                                </span>
                                                                <span
                                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                                        order.status === "Delivered"
                                                                            ? "bg-green-600/20 text-green-400"
                                                                            : "bg-blue-600/20 text-blue-400"
                                                                    }`}
                                                                >
                                  {order.status}
                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start md:items-end gap-2">
                                                            <span className="text-xl font-bold text-yellow-400">{order.total}</span>
                                                            <ChevronRight className="w-5 h-5 text-gray-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Addresses Tab */}
                            {activeTab === "addresses" && (
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                        <h3 className="text-2xl font-bold text-white">Saved Addresses</h3>
                                        <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-semibold rounded-lg transition-colors w-full sm:w-auto">
                                            Add New Address
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {addresses.map((address) => (
                                            <div
                                                key={address.id}
                                                className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 hover:border-yellow-600/40 transition-colors"
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h4 className="text-white font-bold text-lg">{address.type}</h4>
                                                        <p className="text-gray-400 text-sm">{address.name}</p>
                                                    </div>
                                                    {address.isDefault && (
                                                        <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-semibold rounded-full">
                              Default
                            </span>
                                                    )}
                                                </div>

                                                <div className="space-y-2 mb-4">
                                                    <p className="text-gray-300">{address.street}</p>
                                                    <p className="text-gray-400 text-sm">{address.city}</p>
                                                    <p className="text-gray-400 text-sm">{address.country}</p>
                                                </div>

                                                <div className="flex gap-3 pt-4 border-t border-yellow-700/20">
                                                    <button className="flex-1 px-3 py-2 text-yellow-400 hover:bg-yellow-600/10 rounded-lg transition-colors font-medium text-sm">
                                                        Edit
                                                    </button>
                                                    <button className="flex-1 px-3 py-2 text-red-400 hover:bg-red-600/10 rounded-lg transition-colors font-medium text-sm">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Wishlist Tab */}
                            {activeTab === "wishlist" && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white">Wishlist</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {wishlist.map((item) => (
                                            <div key={item.id} className="group cursor-pointer">
                                                <div className={`${item.image} rounded-lg p-8 h-48 flex flex-col justify-between mb-4 border border-yellow-700/20 relative`}>
                                                    <div className="flex justify-end">
                                                        <button className="p-2 bg-slate-900/80 rounded-lg text-red-400 hover:text-red-300 hover:bg-slate-900 transition-colors">
                                                            <Heart className="w-5 h-5 fill-red-400" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-white font-bold line-clamp-2">{item.name}</h4>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-yellow-400 font-bold">{item.price}</span>
                                                        <span className="text-gray-400 text-xs">Added {item.addedDate}</span>
                                                    </div>
                                                    <button className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-semibold rounded-lg transition-colors text-sm">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Settings Tab */}
                            {activeTab === "settings" && (
                                <div className="space-y-6">
                                    <div className="bg-slate-900 border border-yellow-700/20 rounded-xl p-6 md:p-8">
                                        <h3 className="text-2xl font-bold text-white mb-6">Account Settings</h3>

                                        <div className="space-y-6">
                                            <div className="pb-6 border-b border-yellow-700/20">
                                                <h4 className="text-white font-bold mb-4">Security</h4>
                                                <button className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-yellow-400 rounded-lg transition-colors w-full text-left flex items-center justify-between">
                                                    <span>Change Password</span>
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <div className="pb-6 border-b border-yellow-700/20">
                                                <h4 className="text-white font-bold mb-4">Notifications</h4>
                                                <div className="space-y-3">
                                                    <label className="flex items-center gap-3 cursor-pointer">
                                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                                                        <span className="text-gray-300">Order updates</span>
                                                    </label>
                                                    <label className="flex items-center gap-3 cursor-pointer">
                                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                                                        <span className="text-gray-300">Promotional offers</span>
                                                    </label>
                                                    <label className="flex items-center gap-3 cursor-pointer">
                                                        <input type="checkbox" className="w-4 h-4 rounded" />
                                                        <span className="text-gray-300">Product recommendations</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-white font-bold mb-4">Danger Zone</h4>
                                                <button className="px-4 py-3 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg transition-colors w-full text-left font-medium">
                                                    Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}
