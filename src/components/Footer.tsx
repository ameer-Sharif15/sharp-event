const Footer = () => {
  return (
    <div className='bg-[#D8DAE8] md:pt-[102px] py-[10px] pl-[16px] pr-[38px] pb-[37px] md:pl-[122px] gap-[105px] md:pr-[203px] flex flex-col'>
      <div className="flex flex-col md:flex-row md:items-center gap-[24px] md:gap-0 justify-between">
        <div className="flex flex-col gap-[36px]">
          <p className="text-[#0166FF] text-[24px] leading-[29.05px] font-extrabold">SHARP EVENT</p>
          <p className="text-[20px] text-[#00000099] leading-[23.44px] font-semibold">Sharp Event is a service <br />
              provider site for finding <br />
              the best places to host <br />
              your events</p>
        </div>
        <div className="flex gap-[27px] md:gap-[100px] flex-wrap justify-between md:justify-baseline">
          <div className="flex flex-col gap-[28px]">
            <p className="text-[#000000] text-[24px] font-semibold leading-[28.13px]">Our service</p>
            <div className="flex flex-col gap-[19px]">
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">Help center</p>
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">FAQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <p className="text-[#000000] text-[24px] font-semibold leading-[28.13px]">Comapny</p>
            <div className="flex flex-col gap-[19px]">
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">About us</p>
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">Host</p>
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">Activities</p>
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">Cities</p>
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <p className="text-[#000000] text-[24px] font-semibold leading-[28.13px]">Get in touch</p>
            <div className="flex flex-col gap-[19px]">
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">Emailadress@gmail.com</p>
              <p className="text-[20px] text-[#00000099] cursor-pointer hover:text-[#00000080] leading-[23.44px] font-semibold">Address of the company</p>
            </div>
            <div className="flex items-center gap-[30px]">
            <svg className='cursor-pointer' width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="black"/>
            </svg>
            <svg className='cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
              <path d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
              <path d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z" fill="black"/>
              </svg>
              <svg className='cursor-pointer' width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9 0.124512H22.5806L14.5406 9.33708L24 21.8754H16.5943L10.7897 14.2725L4.15543 21.8754H0.471429L9.07029 12.0182L0 0.126226H7.59429L12.8331 7.07423L18.9 0.124512ZM17.6057 19.6674H19.6457L6.48 2.21765H4.29257L17.6057 19.6674Z" fill="black"/>
                </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <p className="text-[#00000080] md:text-[24.2px] leading-[24.2px] font-bold ">
        <span className='italic'>C</span> 2024 SharpEvent. Event booking agency
        </p>
      </div>
    </div>
  )
}

export default Footer