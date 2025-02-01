import  { useState } from 'react'
import { cat, cat_2, task, task_2 } from '../assets'
import { items } from '../data/data'
import Card from './Card'
import Pagination from './Pagination '

const Main = () => {
    const [portrait, setPortrait] = useState(false)
    const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
    
  return (
    <div className='py-[35px] px-[16px] md:pl-[64px] md:pr-[125px] flex flex-col gap-[69px] w-full'>
    <div className="flex items-center justify-between">
     <div className="flex flex-col gap-[11px]">
     <p className="text-[#767676] text-[14px] font-semibold leading-[16.94px]">140 search results for</p>
     <p className="text-black text-base md:text-[24px] font-semibold leading-[29.05px]">Wedding, Lagos   ₦20k - ₦40k, Excellent</p>
     </div>
        <div className="flex items-center gap-[19px]">
            <img src={portrait ? cat_2 : cat} alt="" className='cursor-pointer w-[16px] h-[16px] md:w-[24px] md:h-[24px]' onClick={() => setPortrait(false)} />
            <img src={portrait ? task_2 : task} alt="" className='cursor-pointer w-[16px] h-[16px] md:w-[24px] md:h-[24px]' onClick={() => setPortrait(true)} />
        </div>
        </div>
        <div className={`${portrait ? "grid grid-cols-1 w-full" : "py-2.5 md:pl-2.5 grid grid-cols-1 md:grid-cols-2 gap-[35px] w-full"} `}>
            {items.map((item: { title: string; img: string; subTitle: string; Facilities: string; item1: string; item2: string; item3: string; item4: string; item5: string; item6: string; reviewText: string; reviewNumber: string; rate: string; price: string;},  index: number) => (
                <Card Key={index} item={item} portrait={portrait} />
            ))}
        </div>
        <div className="flex items-center justify-center w-full">
        <Pagination data={data} itemsPerPage={1} />
        </div>
    </div>
  )
}

export default Main