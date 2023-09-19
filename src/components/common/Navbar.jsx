import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-5 px-28 border border-stone-200'>
        <div className='flex items-center gap-3'>
            <div className='flex items-center'>
                <div className='h-7 w-7 rounded-full bg-[#fd7a7a] border border-[#C8C9C6] z-10'></div>
                <div className='h-7 w-7 rounded-full bg-[#fff] border border-stone-300 -ml-2'></div>
            </div>
            <h1 className=' text-4xl font-bold text-stone-700'>Legalz</h1>
        </div>
        <div className=' flex items-center justify-center gap-9 text-stone-500 font-sans mt-1.5'>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Legals</Link>
            <Link href='/'>Contracts</Link>
        </div>
        <div className=' mt-1'>
            <button className=' border-t border-r-[3px] border-b-[3px] border-l border-stone-800 text-stone-800 font-medium text-[15px] px-5 py-1 rounded-full'>logout</button>
        </div>
    </div>
  )
}
