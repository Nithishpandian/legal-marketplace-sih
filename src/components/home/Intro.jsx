import React from 'react'
import Image from 'next/image'
import lawyerImg from "/public/assets/lawyer-img.png"

export default function Intro() {
  return (
    <div className=' grid grid-cols-5 gap-5'>
      <div className=' col-span-2'>
        <span className=' text-stone-700 group'><span className=' group-hover:text-[#f87575] duration-500'>#1</span> PLATFORM FOR LEGAL ISSUES</span>
        <h1 className=' font-bold text-[5.5rem] leading-[5.4rem] text-stone-800'>New offers are waiting for you</h1>
        <p className=' text-stone-500 mb-6 mt-4'>search and find your dream job is now easier than ever just browse a job and apply if you need to.</p>
        <button className='group/button overflow-hidden relative font-roboto font-bold bg-[#f87575] border border-[#f0f0f0] py-2 px-6 rounded text-[#fafafa]' id='#Contact'>
            <div className="duration-300 group-hover/button:-translate-y-8 ">Explore Now</div>
            <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Explore Now</div>
        </button>
      </div>
      <div className='flex items-center justify-end mt-4 col-span-3'>
        <div className='flex relative items-end h-[28rem] w-[28rem] rounded-full bg-[#f17a7a] backdrop-blur-xl border border-[#C8C9C6]'>
          <Image className=' h-[31rem] object-cover mb-10' src={lawyerImg} width={600} height={600} />
          <div className=' w-full absolute -bottom-1 bg-[#fafafa] rounded-lg text-xl font-semibold py-6 px-32 text-stone-700'></div>
        </div>
      </div>
    </div>
  )
}
