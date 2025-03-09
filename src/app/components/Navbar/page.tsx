'use client'
import Link from 'next/link';
import {useState} from 'react'

export default function Navbar() {

    // State to handle the mobile menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function for the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-gray-200 text-black rounded-[4px]">
                <div className="flex justify-between items-center p-4">
                    <Link href={"/"} className='font-bold text-lg'>Logo</Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex xl:flex">
                        <li className='space-x-4'>
                            <Link href="/components/Products" className="text-black hover:text-blue-500">Products</Link>
                            <Link href="/components/Posts" className="text-black hover:text-blue-500">Posts</Link>
                            <Link href='/components/Quotes' className='text-black hover:text-blue-500'>Quotes</Link>
                            <Link href='/components/Recipes' className='text-black hover:text-blue-500'>Recipes</Link>
                        </li>
                        {/* Add more items as needed */}
                    </ul>

                    {/* Hamburger Menu Icon for Mobile */}
                    <div className={`xl:hidden cursor-pointer transition-transform duration-500 ${isMenuOpen ? 'rotate-180': ''} lg:hidden md:hidden flex flex-col items-center space-y-1`} onClick={toggleMenu}>
                        <div className="w-6 h-[4px] bg-black"></div>
                        <div className="w-6 h-[4px] bg-black"></div>
                        <div className="w-6 h-[4px] bg-black"></div>
                    </div>
                </div>

                {/* Mobile Menu (visible when isMenuOpen is true) */}
                {isMenuOpen && (
                    <div className="xl:hidden lg:hidden md:hidden bg-gray-200 p-4">
                        <ul className="space-y-4">
                            <li className='flex flex-col space-y-2'>
                                <Link href="/components/Products" className="text-black hover:text-blue-500">Products</Link>
                                <Link href="/components/Posts" className="text-black hover:text-blue-500">Posts</Link>
                                <Link href='/components/Quotes' className='text-black hover:text-blue-500'>Quotes</Link>
                                <Link href='/components/Recipes' className='text-black hover:text-blue-500'>Recipes</Link>
                            </li>
                            {/* Add more items as needed */}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}