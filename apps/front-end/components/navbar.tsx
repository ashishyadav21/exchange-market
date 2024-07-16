"use client";

import React from 'react'
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const route = usePathname();
    const router = useRouter()

    return (
        <div className='flex h-14 w-full flex-col justify-center pl-[21px] pr-4 border-b-2 border-baseBorderLight'>
            <div className='flex flex-row justify-between'>
                <div className='flex items-center flex-row'>
                    <a className='text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent h-8 text-sm p-0 mr-6 shrink-0'>Backpack</a>
                    <div className='ml-[20px] mr-[20px] flex flex-row items-center justify-center'>
                        <a onClick={() => router.push('/markets')}>Markets</a>
                    </div>
                    <div className='ml-[20px] mr-[20px] flex flex-row items-center justify-center'>
                        <a>Trade</a>
                    </div>
                    <div className='ml-[20px] mr-[20px] flex flex-row items-center justify-center'>
                        <a>More</a>
                    </div>
                    <div className='ml-[20px] mr-[20px] flex flex-row items-center justify-center'>
                        <div className='flex items-center flex-row w-full flex-1 overflow-hidden rounded-xl bg-backGroundColor px-1 ring-0 focus-within:ring-2 focus-within:ring-accentBlue'>
                            <div className='mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-4 w-4 text-baseIcon"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            </div>
                            <input className='h-8 w-[190px] border-0 bg-backGroundColor p-0 text-sm font-normal text-baseTextHighEmphasis placeholder-baseTextLowEmphasis outline-none focus:ring-0' placeholder='Search market' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <a className='my-auto ml-10 text-nowrap rounded-lg bg-greenText/[16%] px-3 py-1.5 text-sm font-semibold text-greenText hover:opacity-90' href='/signup'>Sign up</a>
                    <a className='my-auto ml-6 text-nowrap rounded-lg bg-accentBlue/[16%] px-3 py-1.5 text-sm font-semibold text-accentBlue hover:opacity-90' href='/signin'>Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
