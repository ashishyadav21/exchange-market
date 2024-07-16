"use client"

import Image from "next/image";
import MarketBar from "../../components/marketbar"
import MarketChart from "@/components/marketChart";
import { SwapUI } from "@/components/swapUI";

export default function Home() {

  return (
    <div className="flex flex-row flex-1">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col">
          <MarketBar />
          <MarketChart />

        </div>
        <div className="h-[1px] w-full bg-baseBorderLight"></div>
      </div>
      <div className="w-[1px] flex-col bg-baseBorderLight"></div>
      <div className="flex flex-col w-[300px]">
        <SwapUI market="Abc" />
      </div>
    </div>
  )

}
