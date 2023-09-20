import React from 'react'
import Rating from "@mui/material/Rating";
import Image from 'next/image'

export default function LawyerCard({image, name, rating, category, location, experience}) {
  return (
    <div className='group rounded-md shadow w-fit'>
        <div className=' h-fit w-fit overflow-hidden'>
            <Image className='group-hover:grayscale group-hover:scale-110 duration-500 h-72 w-[22.5rem] rounded-t-md object-cover' src={image} width={300} height={300} />
        </div>
        <div className=' pt-4 pb-6 px-4'>
            <h1 className=' text-xl text-stone-700 font-bold'>{name}</h1>
            <div className='flex items-center gap-3'>
              <Rating
                name="simple-controlled"
                sx={{ "& .MuiRating-iconFilled": { color: "#ff6262" } }}
                value={rating}
                size="small"
              />
              <div className=' border border-stone-500 py-[1px] px-2 rounded-md text-xs font-semibold text-stone-500'>{category}</div>
            </div>
            <div className=' flex items-center gap-1'>
                <span className=' mt-1'><ion-icon name="location-outline"></ion-icon></span>
                <span className=' text-stone-700 font-medium'>{location}</span>
            </div>
            <p className=' text-stone-600'>{experience}</p>
            <button className='group/button overflow-hidden relative font-semibold mt-3 bg-[#f75858] border border-[#f0f0f0] py-1 px-3 rounded text-[#fafafa]' id='#Contact'>
                <div className="duration-300 group-hover/button:-translate-y-8 ">Contact</div>
                <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Contact</div>
            </button>
        </div>
    </div>
  )
}
