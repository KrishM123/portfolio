"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function NavBar() {
    const [expandNav, setExpandNav] = useState(false);

    function changeExpandNav() {
        setExpandNav(!expandNav);
    }

    return (
        <nav className={'flex items-center justify-items-center justify-between bg-lightest w-full h-20'}>
            <Link href="/" className={'sm:px-11 font-semibold text-2xl flex items-center'}>
                kmodi@Portfolio:~$
                <span className="cursor-blink">▮</span>
            </Link>
            <div className="lg:hidden">
                <button onClick={changeExpandNav} className={'flex items-center px-3 py-2 border rounded text-darkest border-darkest hover:text-light hover:border-dark'}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id="navbarLinks" className={`sm:flex px-10 lg:items-center lg:w-auto ${expandNav ? "hidden" : "visible"}`}>
                <div className="text-lg">
                    <Link href="/my-work" className={'lg:inline-block lg:mt-0 hover:text-dark mx-5'}>
                        [ my work ]
                    </Link>
                    <Link href="https://drive.google.com/file/d/1kE9BLv6GWTIGxWWH4V8nFmHc4zO6x0bG/view?usp=sharing" className={'lg:inline-block lg:mt-0 hover:text-dark mx-5'}>
                        [ resume ]
                    </Link>
                </div>
            </div>
        </nav>
    );
}
