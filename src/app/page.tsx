"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FiBookOpen, FiEdit3, FiFolder, FiSearch, FiMenu, FiX, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const features = [
        {
            icon: <FiFolder className="w-12 h-12" />,
            title: "Category Management",
            description: "Organisir artikel Anda dengan sistem kategori yang powerful dan mudah digunakan"
        },
        {
            icon: <FiEdit3 className="w-12 h-12" />,
            title: "Markdown Editor",
            description: "Editor markdown yang intuitif dengan preview real-time untuk menulis konten"
        },
        {
            icon: <FiSearch className="w-12 h-12" />,
            title: "Advanced Search",
            description: "Temukan artikel yang Anda butuhkan dengan fitur pencarian yang cepat dan akurat"
        },
        {
            icon: <FiBookOpen className="w-12 h-12" />,
            title: "Knowledge Base",
            description: "Bangun basis pengetahuan yang terstruktur untuk tim atau organisasi Anda"
        }
    ];

    const faqs = [
        {
            question: "Apa itu Wiki App?",
            answer: "Wiki App adalah platform knowledge management yang memungkinkan Anda membuat, mengelola, dan berbagi dokumentasi dengan mudah menggunakan markdown."
        },
        {
            question: "Apakah Wiki App gratis?",
            answer: "Ya, kami menyediakan paket gratis dengan fitur dasar. Untuk fitur premium, tersedia paket berbayar dengan harga yang terjangkau."
        },
        {
            question: "Bagaimana cara memulai?",
            answer: "Cukup daftar dengan email Anda, buat workspace pertama, dan mulai menulis artikel pertama Anda dengan markdown editor kami."
        },
        {
            question: "Apakah mendukung kolaborasi tim?",
            answer: "Ya, Wiki App mendukung kolaborasi tim dengan fitur permission management dan real-time collaboration."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="border-b border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <FiBookOpen className="w-8 h-8" />
                            <span className="text-2xl font-bold">Wiki App</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="hover:text-gray-600 transition">Features</a>
                            <a href="#faq" className="hover:text-gray-600 transition">FAQ</a>
                            <Link href={"/auth"} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-black">
                        <div className="px-4 py-4 space-y-3">
                            <a href="#features" className="block hover:text-gray-600">Features</a>
                            <a href="#faq" className="block hover:text-gray-600">FAQ</a>
                            <a href="#contact" className="block hover:text-gray-600">Contact</a>
                            <button className="w-full bg-black text-white px-6 py-2 hover:bg-gray-800">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Knowledge Management
                        <br />
                        <span className="inline-block mt-2">Made Simple</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Buat, kelola, dan bagikan dokumentasi tim Anda dengan mudah.
                        Wiki App adalah solusi modern untuk knowledge management.
                    </p>
                    <Link href="/auth" className="bg-black text-white px-8 py-4 text-lg rounded-md hover:bg-gray-800 transition w-full sm:w-auto">
                        Start Now
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Fitur Unggulan
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="border rounded-md border-white p-8 hover:bg-white hover:text-white transition group"
                            >
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-300 group-hover:text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-2 rounded-md border-black">
                                <button
                                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="font-bold text-left">{faq.question}</span>
                                    {openFaq === index ?
                                        <FiChevronUp className="w-5 h-5 flex-shrink-0" /> :
                                        <FiChevronDown className="w-5 h-5 flex-shrink-0" />
                                    }
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 py-4 border-t-2 border-black bg-gray-50">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2 border-black bg-black text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <FiBookOpen className="w-6 h-6" />
                                <span className="text-xl font-bold">Wiki App</span>
                            </div>
                            <p className="text-gray-600">
                                Platform knowledge management modern untuk tim Anda.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Documentation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-white">Privacy</a></li>
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                                <li><a href="#" className="hover:text-white">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
                        <p>&copy; 2025 Wiki App. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}