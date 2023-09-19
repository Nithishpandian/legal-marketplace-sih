import React from 'react'
import Rating from "@mui/material/Rating";
import Image from 'next/image'
import lawyer1 from "/public/assets/lawyer1.webp"
import lawyer2 from "/public/assets/lawyer2.jpg"
import lawyer3 from "/public/assets/lawyer3.webp"

export default function LawyerCard() {
  return (
    <div className='group rounded-md shadow w-fit'>
        <div className=' h-fit w-fit overflow-hidden'>
            <Image className='group-hover:grayscale group-hover:scale-110 duration-500 h-72 w-[22.5rem] rounded-t-md object-cover' src={lawyer3} width={300} height={300} />
        </div>
        <div className=' pt-4 pb-6 px-4'>
            <h1 className=' text-xl text-stone-700 font-bold'>Rajesh KS</h1>
            <Rating
              name="simple-controlled"
              sx={{ "& .MuiRating-iconFilled": { color: "#ff6262" } }}
              value={4}
              size="small"
            />
            <div className=' flex items-center gap-1'>
                <span className=' mt-1'><ion-icon name="location-outline"></ion-icon></span>
                <span className=' text-stone-700 font-medium'>Hill roads, Delhi</span>
            </div>
            <p className=' text-stone-600'>17 years of exprience in supreme court</p>
            <button className='group/button overflow-hidden relative font-semibold mt-3 bg-[#f75858] border border-[#f0f0f0] py-1 px-3 rounded text-[#fafafa]' id='#Contact'>
                <div className="duration-300 group-hover/button:-translate-y-8 ">Contact</div>
                <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Contact</div>
            </button>
        </div>
    </div>
  )
}
