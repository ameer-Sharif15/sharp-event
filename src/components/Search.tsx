const Search = () => {
  return (
    <div className='bg-[#F8F8F8] w-[424px] px-[49px] py-[52px] flex flex-col gap-[17px]'>
        <p className="text-black text-[20px] leading-[24.2px] font-bold">Your Search</p>
        <div className="flex flex-col gap-[8px] w-full">
            <div className="flex flex-col gap-[7px]">
                <label htmlFor="event" className='text-black font-semibold text-[14px]'>Event Type</label>
                <input type="text" name="evnet" id="event" className='bg-[#FFFFFF] outline-none rounded-[15px] w-full h-[43px] pl-[36px]' placeholder='Wedding' />
            </div>
            <div className="flex flex-col gap-[7px]">
                <label htmlFor="Location" className='text-black font-semibold text-[14px]'>Location</label>
                <input type="text" name="Location" id="Location" className='bg-[#FFFFFF] outline-none rounded-[15px] w-full h-[43px] pl-[36px]' placeholder='Lagos' />
            </div>
            <div className="relative flex flex-col gap-[7px]">
                <label htmlFor="Price" className='text-black font-semibold text-[14px]'>Price Range</label>
                <input type="text" name="Price" id="Price" className='bg-[#FFFFFF] peer outline-none rounded-[15px] w-full h-[43px] pl-[36px]' placeholder='     20k -     40k' />
                <div className="absolute peer-focus:hidden top-[2.8rem] left-[2.6rem]">
                <svg className="peer-focus:hidden" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4285 0V10H9.10801L5.24647 3.18848H5.17844V10H3.69385V0H5.02238L8.87992 6.81641H8.95195V0H10.4285Z" fill="#767676"/>
                    <path d="M1 3.63638H13" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1 6.81818H13" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className="absolute peer-focus:hidden top-[2.8rem] left-[6.2rem]">
                <svg className="peer-focus:hidden" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4285 0V10H9.10801L5.24647 3.18848H5.17844V10H3.69385V0H5.02238L8.87992 6.81641H8.95195V0H10.4285Z" fill="#767676"/>
                    <path d="M1 3.63638H13" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1 6.81818H13" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-[7px]">
                <label htmlFor="Rating" className='text-black font-semibold text-[14px]'>Rating</label>
                <input type="text" name="Rating" id="Rating" className='bg-[#FFFFFF] outline-none rounded-[15px] w-full h-[43px] pl-[36px]' placeholder='Excellent' />
            </div>
        </div>
        <button 
        className="bg-[#0166FF] hover:bg-white hover:text-[#0166FF] cursor-pointer border-[#0166FF] border-2 rounded-[18px] w-full h-[35.12px] text-white text-[13px] leading-[15.73px] font-semibold">
            Search
        </button>
    </div>
  )
}

export default Search