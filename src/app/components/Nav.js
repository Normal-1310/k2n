"use client";
import Image from "next/image";
import { useState } from "react"
import Link from "next/link";
export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="flex justify-center">
            <nav className="backdrop-blur-lg bg-slate-100 dark:bg-slate-950 fixed w-11/12 top-0 border-b border-gray-200 dark:border-gray-600 rounded-full mt-3">
            {/* <nav className="backdrop-blur-lg bg-slate-100/5 dark:bg-slate-950/5 fixed w-11/12 top-0 border-b border-gray-200 dark:border-gray-600 rounded-full mt-3" style={{backdropFilter: "blur(10px)"}}> */}

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image
                                src='https://9tonkla.cloud/9tonkal/assets/photos/k2nlogo(B).png'
                                className="dark:hidden block"
                                alt="Logo"
                                height={44}
                                width={44}
                                />
                            <Image
                                src='https://9tonkla.cloud/9tonkal/assets/photos/k2n(W).png'
                                className="h-11 dark:block hidden"
                                alt="Logo"
                                height={44}
                                width={44}
                                />
                        </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
