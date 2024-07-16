"use client"

import React from 'react'
import { TradeView } from './tradeViewChart';
import Depth from './depth/Depth';


const MarketChart = () => {

    return (
        <div className='flex flex-row h-[620px] border-y border-baseBorderLight'>
            <div className='flex flex-col flex-1'>
                <div className='flex flex-row justify-between items-center px-4'>
                    <p className='text-baseTextHighEmphasis text-lg'>Charts</p>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row flex-0 gap-5 undefined'>
                            <div className='flex flex-col cursor-pointer justify-center py-2'>
                                <div className='text-sm font-medium py-1 border-b-2 border-accentBlue text-baseTextHighEmphasis'>Trading View</div>
                            </div>
                            <div className='flex flex-col cursor-pointer justify-center py-2'>
                                <div className='text-sm font-medium py-1 border-b-2 border-transparent text-baseTextMedEmphasis hover:border-baseTextHighEmphasis hover:text-baseTextHighEmphasis'>
                                    Depth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <TradeView market="SOL_USDC" />
                </div>
            </div>
            <div className='w-[1px] flex-col bg-baseBorderLight'></div>
            <Depth />
        </div>
    )
}

export default MarketChart

