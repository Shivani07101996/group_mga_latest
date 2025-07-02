"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar1 = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src="/assets/images/logo/policyadvisor-logo.png" 
                                alt="PolicyAdvisor eXchange" 
                                width={200} 
                                height={45}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link 
                                href="/" 
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link 
                                href="#about" 
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                            >
                                About
                            </Link>
                            <Link 
                                href="#features" 
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                            >
                                Features
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link 
                            href="#contact" 
                            className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700"
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navbar1 }; 