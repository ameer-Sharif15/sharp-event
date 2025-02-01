const Navbar = () => {
  return (
    <div className='w-full px-[16px]  md:px-[105px] py-[40px] md:py-[23px] flex items-center justify-between bg-[#FFFFFF]'>
        <div className="text-[#0166FF] text-[24px] font-bold leading-[29.5px]">SHARP EVENT</div>
        <div className="hidden md:flex items-center gap-[141px]">
            <p className="text-[#000000] font-bold text-base leading-[19.36px]">List Your Space</p>
            <div className="flex items-center gap-4">
                <button 
                className="hover:bg-[#0166FF] bg-white text-[#0166FF] cursor-pointer border-[#0166FF] border-2 rounded-[12px] w-[176.36px] h-[35.12px] hover:text-white text-[13px] leading-[15.73px] font-semibold">
                    Log in
                </button>
                <button 
                className="bg-[#0166FF] hover:bg-white hover:text-[#0166FF] cursor-pointer border-[#0166FF] border-2 rounded-[12px] w-[176.36px] h-[35.12px] text-white text-[13px] leading-[15.73px] font-semibold">
                   Sign up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar