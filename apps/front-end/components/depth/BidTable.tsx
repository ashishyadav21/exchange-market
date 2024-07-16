import React, { useEffect, useState } from 'react'


interface Props {
    bids: [string, string][]
}

const BidTable = (props: Props) => {
    const { bids } = props
    const [bidsWithTotal, setBidsWithTotal] = useState<[string, string, number][]>()
    const [maxTotal, setMaxTotal] = useState<number>(0)

    useEffect(() => {
        let currentTotal = 0;
        const relevantBids = bids.slice(0, 15);
        const bidsWithTotal: [string, string, number][] = relevantBids.map(([price, quantity]) => [price, quantity, currentTotal += Number(quantity)]);
        const maxTotal = relevantBids.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);
        setMaxTotal(maxTotal)
        setBidsWithTotal(bidsWithTotal)

    }, [bids])

    return (
        <div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-end h-full w-full flex-col-reverse'>
                    {bidsWithTotal?.map(([price, quantity, total], index) => (
                        <div key={index} className="flex h-[25px] items-center">
                            <button type="button" className="h-full w-full" data-rac="">
                                <div className="flex items-center flex-row relative h-full w-full overflow-hidden px-3 hover:border-t hover:border-dashed hover:border-baseBorderFocus/50">
                                    <div className="absolute top-[1px] bottom-[1px] right-0 w-[5%] bg-[rgba(253,75,78,0.16)] transition-all duration-400 ease-in-out"></div>
                                    <div className="absolute top-[1px] bottom-[1px] right-0 w-[5%] bg-[rgba(253,75,78,0.32)] transition-all duration-400 ease-in-out"></div>

                                    <p className="z-10 w-[30%] text-left text-xs font-normal tabular-nums text-redText/90">{price}</p>
                                    <p className="z-10 w-[30%] text-right text-xs font-normal tabular-nums text-baseTextHighEmphasis/80">{quantity}</p>
                                    <p className="z-10 w-[40%] text-right text-xs font-normal tabular-nums text-baseTextHighEmphasis/80">{total.toFixed(2)}</p>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BidTable
