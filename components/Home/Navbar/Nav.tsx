"use client";

import React, { useEffect } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import { navLinks } from '../../../contants/constans'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void
}

const Nav = ({openNav}:Props) => {

    {/* background bergerak */}
    const [navBg,setNavBg] = React.useState(false);

    useEffect(() => {
        const handler = () => {
          if (window.scrollY >= 90) setNavBg(true);
          if (window.scrollY < 90) setNavBg(false); 
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        //latar belakang scroll
        <div className={` ${ 
            navBg ? "bg-blue-950 shadow-md" : "fixed"
            } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}> {/* fixed full utk buat full navbar merah */}
            
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
                        <TbAirBalloon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Trip</h1>
                </div>

                {/* Navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id} className="w-fit block">
                    <p className="relative text-white text-base font-medium after:block after:content-[''] after:absolute 
                    after:h-[3px] after:bg-yellow-900 after:w-full after:scale-x-0 hover:after:bg-yellow-500 hover:after:scale-x-100 
                    after:transition-transform after:duration-500 after:origin-right">
                        {link.label}
                    </p>
                    </Link>
                ))}
                </div>
                
                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white 
                   hover:bg-gray-400 transition duration-200 rounded-lg">
                        Book Now
                    </button>
                </div>

                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />

            </div>
        </div>
    )
}

export default Nav