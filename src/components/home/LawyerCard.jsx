import React from 'react'
import Rating from "@mui/material/Rating";
import Image from 'next/image'
import lawyer1 from "/public/assets/lawyer1.webp"
import lawyer2 from "/public/assets/lawyer2.jpg"
import lawyer3 from "/public/assets/lawyer3.webp"

export default function LawyerCard() {
  return (
    <div className=' rounded-md shadow w-fit'>
        <Image className=' h-72 w-[22.5rem] rounded-t-md object-cover' src={lawyer1} width={300} height={300} />
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
            <button className=' mt-3 bg-[#f75858] py-1 px-3 rounded text-stone-50 font-semibold'>Contact</button>
        </div>
    </div>
  )
}
