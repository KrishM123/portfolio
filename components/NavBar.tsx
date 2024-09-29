'use client';
import React, { useState } from "react";
import Link from 'next/link';

export default function NavBar() {
    const [expandNav, setExpandNav] = useState(false);

    function toggleExpandNav() {
        setExpandNav(!expandNav);
    }

    return (
        <nav className="bg-lightest w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="font-semibold text-2xl flex items-center">
                        kmodi@Portfolio:~$
                        <span className="cursor-blink">▮</span>
                    </Link>
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-4 justify-end">
                            <Link href="/my-work" className="hover:text-dark">
                                [ my work ]
                            </Link>
                            <Link href="https://drive.google.com/file/d/1kE9BLv6GWTIGxWWH4V8nFmHc4zO6x0bG/view?usp=sharing" className="hover:text-dark">
                                [ resume ]
                            </Link>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleExpandNav} className="inline-flex items-center justify-center p-2 rounded-md text-darkest hover:text-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Toggle main menu</span>
                            {expandNav ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden ${expandNav ? 'block' : 'hidden'} w-full bg-lightest`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end">
                    <Link href="/my-work" className="hover:text-dark block px-3 py-2 rounded-md text-base font-medium">
                        [ my work ]
                    </Link>
                    <Link href="https://drive.google.com/file/d/1kE9BLv6GWTIGxWWH4V8nFmHc4zO6x0bG/view?usp=sharing" className="hover:text-dark block px-3 py-2 rounded-md text-base font-medium">
                        [ resume ]
                    </Link>
                </div>
            </div>
        </nav>
    );
}