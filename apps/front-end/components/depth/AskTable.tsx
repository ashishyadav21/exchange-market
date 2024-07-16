import React, { useEffect, useState } from 'react'

const orders = [
    { price: 139.94, size: 0.40, total: 594.96, isBid: false },
    { price: 139.92, size: 0.05, total: 594.56, isBid: false },
    { price: 139.91, size: 38.98, total: 594.51, isBid: false },
    { price: 139.84, size: 100.11, total: 555.53, isBid: false },
    { price: 139.81, size: 135.91, total: 455.42, isBid: false },
    { price: 139.80, size: 135.91, total: 319.51, isBid: false },
    { price: 139.79, size: 163.88, total: 183.60, isBid: false },
    { price: 139.78, size: 0.79, total: 19.72, isBid: false },
    { price: 139.77, size: 18.93, total: 18.93, isBid: false },
    { price: 139.76, size: 98.11, total: 98.11, isBid: true },
    { price: 139.75, size: 93.07, total: 191.18, isBid: true },
    { price: 139.74, size: 35.77, total: 226.95, isBid: true },
    { price: 139.73, size: 135.96, total: 362.91, isBid: true },
    { price: 139.70, size: 100.21, total: 463.12, isBid: true },
];


interface Props {
    asks: [string, string][]
}

const AskTable = (props: Props) => {

    const { asks } = props

    const [asksWithTotal, setAsksWithTotal] = useState<[string, string, number][]>()
    const [maxTotal, setMaxTotal] = useState<number>(0)

    useEffect(() => {
        let currentTotal = 0;
        const relevantBids = asks.slice(0, 15);
        const asksWithTotal: [string, string, number][] = relevantBids.map(([price, quantity]) => [price, quantity, currentTotal += Number(quantity)]);
        const maxTotal = relevantBids.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);
        setMaxTotal(maxTotal)
        setAsksWithTotal(asksWithTotal)

    }, [asks])

    return (
        <div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-end h-full w-full flex-col-reverse'>
                    {asksWithTotal?.map(([price, quantity, total], index) => (
                        <div key={index} className="flex h-[25px] items-center">
                            <button type="button" className="h-full w-full" data-rac="">
                                <div className="flex items-center flex-row relative h-full w-full overflow-hidden px-3 hover:border-t hover:border-dashed hover:border-baseBorderFocus/50">
                                    <div className="absolute top-[1px] bottom-[1px] right-0 w-[5%] bg-greenText transition-all duration-400 ease-in-out"></div>
                                    <div className="absolute top-[1px] bottom-[1px] right-0 w-[5%] bg-greenText transition-all duration-400 ease-in-out"></div>


                                    <p className="z-10 w-[30%] text-left text-xs font-normal tabular-nums text-greenText/90">{price}</p>
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

export default AskTable
