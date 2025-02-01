import React from 'react'

interface Props {
    item: { 
        title: string; 
        img: string; 
        subTitle: string; 
        Facilities: string; 
        item1: string; 
        item2: string; 
        item3: string; 
        item4: string; 
        item5: string; 
        item6: string; 
        reviewText: string; 
        reviewNumber: string; 
        rate: string; 
        price: string;
    },
    portrait: boolean,
    Key: number
}

const Card: React.FC<Props> = ({item, portrait, Key}) => {
  return (
    <div key={Key} className={`${portrait ? 'py-[13px] pl-[15px] gap-[8.07px] flex md:gap-[16px] ' : 'py-[11.6px] px-[12.6px] flex flex-col gap-[13.61px] hover:shadow-2xl rounded-2xl hover:-translate-y-1'}  `}>
    <img src={item.img} alt="" className={`${portrait ? 'rounded-[9.58px] md:rounded-[19px] w-[101.89px] md:w-[202px]' : 'rounded-[16.16px] h-[171.86px] object-cover'}`} />
    <div className={`${portrait ? 'flex justify-between w-full' : 'flex justify-between w-full '}  `}>
        <div className={`${portrait ? 'flex flex-col gap-[5.04px] py-[8.5px]' : 'flex flex-col gap-[8.51px]'} `}>
            <div className="flex flex-col gap-[4.25px]">
                <p className={`${portrait ? 'text-[10.09px] leading-[12.21px]' : 'text-[17.02px] leading-[20.59px]'} text-[#000000]  md:text-[20px]  md:leading-[24.2px] font-semibold`}>{item.title}</p>
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.subTitle}</p>
            </div>
            <div className="flex flex-col gap-[2.55px] ">
            <p className={`${portrait ? 'text-[7.57px] leading-[9.16px]' : 'text-[12.76px] leading-[15.44px]'} text-[#000000]  md:text-[15px] md:leading-[18.15px] font-semibold`}>{item.Facilities}</p>
                <div className="flex flex-col gap-[1px] ">
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.item1}</p>
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.item2}</p>
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.item3}</p>
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.item4}</p>
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.item5}</p>
                <p className={`${portrait ? 'text-[7.06px] leading-[8.55px]' : 'text-[11.91px] leading-[14.41px]'} text-[#A2A2A2]  md:text-[14px] md:leading-[16.94px] font-semibold`}>{item.item6}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between ">
            <div className="flex self-end items-center gap-[5px]">
                <div className="flex flex-col gap-[2.55px] items-center">
                    <p className={`${item.reviewText === 'Very good' ? 'text-[#0166FF]' : item.reviewText === 'Excellent' ? 'text-[#009D52]' : item.reviewText === 'Average' ? 'text-[#E3A913]' : 'text-[#0166FF]'} ${portrait ? 'text-[7.57px] leading-[9.16px]' : 'text-[12.76px] leading-[15.44px]'} md:text-[12.76px] md:leading-[15.44px] font-semibold `}>{item.reviewText}</p>
                    <p className={`${portrait ? 'text-[6.05px] leading-[7.33px]' : 'text-[10.36px] leading-[12.36px]'} text-[#A2A2A2] md:text-[10.36px] md:leading-[12.36px]  font-semibold `}>{item.reviewNumber}</p>
                </div>
                <div className={`${item.reviewText === 'Very good' ? 'bg-[#E1EAFC]' : item.reviewText === 'Excellent' ? 'bg-[#E1FFD7]' : item.reviewText === 'Average' ? 'bg-[#FFF8D3]' : 'bg-[#E1EAFC]'} rounded-[16.16px] ${portrait ? 'w-[32.18px] h-[19.09px]' : 'w-[54.03px] h-[32.02px]' } md:w-[54.03px] md:h-[32.02px]  flex   justify-center items-center  `}>
                    <p className={`${item.reviewText === 'Very good' ? 'text-[#0166FF]' : item.reviewText === 'Excellent' ? 'text-[#009D52]' : item.reviewText === 'Average' ? 'text-[#E3A913]' : 'text-[#0166FF]'} font-semibold ${portrait ? 'text-[7.57px]' : 'text-[15px]' } md:text-[15px]  leading-[18.15px]]  `}>{item.rate}</p>
                </div>
            </div>
            <div className={`flex flex-col w-full ${portrait ? 'gap-[15.13px]' : 'gap-[30px]'} md:gap-[30px] `}>
                <div className="flex gap-[1px] flex-row items-center self-end">
                <svg width={portrait ? '9' : "20"} className='mt-[1px]' height={portrait ? '7' : "14"} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1819 0V14H13.2211L7.48729 4.46387H7.38628V14H5.18188V0H7.15455L12.8824 9.54297H12.9894V0H15.1819Z" fill="black"/>
                <path d="M1.18188 5.09094H19.0001" stroke="black" stroke-width="2" stroke-linecap="round"/>
                <path d="M1.18188 9.54547H19.0001" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
                    <p className={`${portrait ? 'text-[10.09px] leading-[12.21px] ' : 'text-[17.02px] leading-[20.59px]'} md:text-[17.02px] text-[#000000]  font-semibold `}>{item.price}</p>
                </div>
                <button 
                className={`${portrait ? 'text-[6.56px] leading-[7.94px] h-[21.11px]' : 'text-[11px] leading-[13.39px] h-[35.12px]'} md:text-[11px] md:leading-[13.39px] md:h-[35.12px] bg-[#0166FF] hover:bg-white hover:text-[#0166FF] cursor-pointer border-[#0166FF]  px-[31px] border-2 rounded-[18px] w-full  text-white  font-semibold`}>
                    See booking options
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card