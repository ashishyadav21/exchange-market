"use client";

import React, { useEffect, useState } from 'react'
import { getTicker } from './utils/httpClient';
import { Ticker } from './utils/types';

const MarketBar = () => {

    const [ticker, setTicker] = useState<Ticker | null>(null);

    useEffect(() => {
        getTicker('SOL_USDC').then(setTicker);
    }, [])

    console.log("ticker ---->", ticker)

    return (
        <div className='flex items-center flex-row relative w-full overflow-hidden'>
            <div className='flex items-center justify-between flex-row no-scrollbar w-full gap-4 overflow-auto pr-4'>
                <div className='flex h-[60px] shrink-0 space-x-4'>
                    <button className='react-aria-Button flex flex-row justify-center items-center'>
                        <div className='flex items-center justify-between flex-row cursor-pointer rounded-lg p-3 hover:opacity-80'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-left-open mr-2 h-6 w-6 text-baseIcon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path><path d="m14 9 3 3-3 3"></path></svg>
                        </div>
                        <div className='class="flex flex-row mr-2"'>
                            <p className='font-medium text-baseTextHighEmphasis undefined'>SOL/USDC</p>
                        </div>
                    </button>
                    <div className='flex items-center flex-row space-x-8'>
                        <div className='flex flex-col h-full justify-center'>
                            <p className='font-medium tabular-nums text-greenText text-lg'>140.92</p>
                            <p className='font-medium text-baseTextHighEmphasis text-sm tabular-nums'>$140.11</p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <p className='font-medium tabular-nums text-baseTextMedEmphasis text-xs'>24H Change</p>
                            <p className='mt-1 font-medium text-greenText text-sm tabular-nums'>+4.51 +3.33%</p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <p className='font-medium tabular-nums text-baseTextMedEmphasis text-xs'>24H High</p>
                            <p className='font-medium text-baseTextHighEmphasis text-sm tabular-nums'>140.94</p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <p className='font-medium tabular-nums text-baseTextMedEmphasis text-xs'>24H Low</p>
                            <p className='font-medium text-baseTextHighEmphasis text-sm tabular-nums'>135.94</p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <p className='font-medium tabular-nums text-baseTextMedEmphasis text-xs'>24H Volume (SOL)</p>
                            <p className='font-medium text-baseTextHighEmphasis text-sm tabular-nums'>16438.94</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketBar
