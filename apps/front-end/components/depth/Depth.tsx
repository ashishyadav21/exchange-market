import React, { useEffect, useState } from 'react'
import BidTable from './BidTable'
import AskTable from './AskTable'
import { getDepth, getTicker } from '../utils/httpClient';

const Depth = () => {

    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    console.log("bids ---->", bids)
    console.log("asks ----<", asks)

    useEffect(() => {
        getDepth('SOL_USDC').then(d => {
            setBids(d?.bids?.reverse().slice(0, 12));
            setAsks(d?.asks?.slice(0, 12));
        });

        // getTicker('SOL_USDC').then(t => setPrice(t.lastPrice));
    }, [])

    return (
        <div>
            <div className='flex flex-col w-[300px] overflow-hidden'>
                <div className='flex flex-col h-full'>
                    <div className='px-3'>
                        <div className='flex flex-row flex-0 gap-5 undefined'>
                            <div className='flex flex-col cursor-pointer justify-center py-2'>
                                Book
                            </div>
                            <div className='flex flex-col cursor-pointer justify-center py-2'>
                                Trade
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col grow overflow-y-hidden'>
                        <div className='flex flex-col h-full grow overflow-x-hidden'>
                            <div className='items-center flex-row border-b-1 border-b-borderColor flex px-3 py-2 text-baseTextHighEmphasis'>
                                <p className='font-medium text-baseTextHighEmphasis w-[30%] text-xs'>Price (USDC)</p>
                                <p className='font-medium text-baseTextHighEmphasis w-[30%] text-xs flex justify-end'>Size (SOL)</p>
                                <p className="font-medium text-baseTextHighEmphasis w-[30%] text-xs flex justify-end ml-[10%]">Price (USDC)</p>
                            </div>

                            <div className='flex flex-col no-scrollbar h-full flex-1 snap-mandatory overflow-y-auto font-sans'>
                                <BidTable bids={bids ?? []} />
                                <div className='flex flex-col flex-0 snap-center px-3 py-1'>
                                    <div className='flex justify-between flex-row'>
                                        <p className='font-medium tabular-nums text-greenText'>
                                            145.009
                                        </p>
                                    </div>
                                </div>
                                <AskTable asks={asks ?? []} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Depth
