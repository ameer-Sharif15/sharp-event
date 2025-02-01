import { useState } from "react";
import { range_data } from "../data/data"
import RangeBarChart from "./RangeBarChart"

const Filters = () => {
    const [range, setRange] = useState<[number, number]>([30, 220]);

  return (
    <div className='px-[45px] py-[64px] flex flex-col'>
        <p className="text-black text-[20px] leading-[24.2px] font-bold mb-[20px]">Popular filters</p>
        <div className="flex flex-col gap-[10px] mb-[20px]">
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Wedding</p>
            </div>
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Dinner Parties</p>
            </div>
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Meeting</p>
            </div>
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Networking</p>
            </div>
        </div>
        <div className="w-full">
        <p className="text-black text-[20px] leading-[24.2px] font-bold">Price Range</p>
          <div className="mt-[-30px] px-[2px]">
          <RangeBarChart data={range_data} setRange={setRange} range={range} />
          </div>
            <div className="flex justify-between mt-[-32px]">
                <div className="flex flex-col gap-[8px]">
                <p className="text-[#767676] text-[14px] font-semibold">Min Price</p>
                <div className="relative">
                    <div className="absolute flex items-center gap-[15px] right-[7.5px] top-[7px]">
                        <div className="h-[14.5px] bg-[#76767699] w-[1px]"/>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0V11H10.4314L5.84433 3.50732H5.76352V11H4V0H5.57813L10.1604 7.49805H10.246V0H12Z" fill="black"/>
                        <path d="M1 4.15906H15" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M1 7.65906H15" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <input type="text" value={range[0]} className='border outline-none pl-[5px]  border-[#767676] w-[136px] h-[29px] rounded-[4px]' />
                </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                <p className="text-[#767676] text-[14px] font-semibold">Max Price</p>
                <div className="relative">
                    <div className="absolute flex items-center gap-[15px] right-[7.5px] top-[7px]">
                        <div className="h-[14.5px] bg-[#76767699] w-[1px]"/>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0V11H10.4314L5.84433 3.50732H5.76352V11H4V0H5.57813L10.1604 7.49805H10.246V0H12Z" fill="black"/>
                        <path d="M1 4.15906H15" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M1 7.65906H15" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <input type="text" value={range[1]} className='border outline-none pl-[5px]  border-[#767676] w-[136px] h-[29px] rounded-[4px]' />
                </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col mt-[30px]">
        <p className="text-black text-[20px] leading-[24.2px] font-bold mb-[20px]">Guest Rating</p>
        <div className="flex flex-col gap-[10px] mb-[20px]">
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Any</p>
            </div>
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Excellent</p>
            </div>
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Very good</p>
            </div>
            <div className="flex flex-row items-center gap-[13px]">
                <input type="checkbox" name="" id="" />
                <p className="text-[#767676] text-[14px] font-semibold cursor-pointer">Good</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Filters

