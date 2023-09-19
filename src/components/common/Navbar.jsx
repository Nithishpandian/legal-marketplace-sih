import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-5 px-32 border border-stone-200'>
        <div className='flex items-center gap-3'>
            <div className='flex items-center'>
                <div className='h-7 w-7 rounded-full bg-[#fd7a7a] border border-[#C8C9C6] z-10'></div>
                <div className='h-7 w-7 rounded-full bg-[#fff] border border-stone-300 -ml-3'></div>
            </div>
            <h1 className=' text-4xl font-bold font-poppins text-stone-700'>Legalz</h1>
        </div>
        <div className=' flex items-center justify-center gap-9 text-stone-500 font-sans mt-1.5'>
            <Link className='hover:text-[#ff6c62] duration-500' href='/'>Home</Link>
            <Link className='hover:text-[#ff6c62] duration-500' href='/'>About</Link>
            <Link className='hover:text-[#ff6c62] duration-500' href='/'>Legals</Link>
            <Link className='hover:text-[#ff6c62] duration-500' href='/'>Contracts</Link>
        </div>
        <div className=' mt-1'>
            <button className=' border-t border-r-[4px] border-b-[4px] border-l border-stone-700 text-stone-800 font-semibold text-[15px] px-5 py-1 rounded hover:bg-stone-700 hover:text-stone-50 duration-500'>logout</button>
        </div>
    </div>
  )
}
