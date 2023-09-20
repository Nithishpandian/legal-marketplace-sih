"use client"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
  

export default function page() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <div className=' py-24 pl-56 pr-80'>
        <div className='flex flex-col gap-6'>
            <div className='grid grid-cols-5 items-center justify-center gap-7'>
                <div className=' col-span-2'>
                    <h1 className=' text-xl text-stone-700 font-semibold'>Gig title</h1>
                    <p className=' text-sm text-stone-600'>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                </div>
                <div className=' col-span-3'>
                    <input type="text" className=' border border-stone-400 rounded py-2 px-4 w-full text-stone-700 font-medium text-lg focus:outline-none' placeholder='Gig title' />
                </div>
            </div>
            <div className='grid grid-cols-5 items-center justify-center gap-7'>
                <div className=' col-span-2'>
                    <h1 className=' text-xl text-stone-700 font-semibold'>Category</h1>
                    <p className=' text-sm text-stone-600'>Choose the category and sub-category most suitable for your Gig.</p>
                </div>
                <div className='flex items-center gap-3 col-span-3'>
                    <div className=''>
                        <FormControl sx={{ m: 1, minWidth: 285 }} size="small">
                            <InputLabel id="category">Age</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                value={age}
                                label="Category"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>Zero</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 285 }} size="small">
                            <InputLabel id="subCategory">Age</InputLabel>
                            <Select
                                labelId="subCategory"
                                id="subCategory"
                                value={age}
                                label="SubCategory"
                                onChange={handleChange}
                            >
                                <MenuItem value={50}>Fifty</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 items-center justify-center gap-7'>
                <h1 className=' col-span-2 text-xl text-stone-700 font-semibold'>Service type</h1>
                <div className=' col-span-3'>
                    <FormControl sx={{ m: 1, minWidth: 600 }} size="small">
                        <InputLabel id="service-type">SERVICE</InputLabel>
                        <Select
                            labelId="service-type"
                            id="service-type"
                            value={age}
                            label="Service-type"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Zeross</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='grid grid-cols-5 items-center justify-center gap-7'>
                <div className=' col-span-2'>
                    <h1 className=' text-xl text-stone-700 font-semibold'>Search tags</h1>
                    <p className=' text-sm text-stone-600'>Tag your Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found.</p>
                </div>
                <div className=' col-span-3'>
                    <input type="text" className=' border border-stone-400 rounded py-2 px-4 h-16 w-full text-stone-700 font-medium text-lg focus:outline-none' placeholder='' />
                </div>
            </div>
            <div>
                <h1 className=' text-xl text-stone-700 font-semibold'>Description</h1>
                <p className=' text-sm text-stone-600 mb-4'>Briefly Describe Your Gig</p>
                <textarea className=' ml-4 border border-stone-400 rounded py-2 px-4 text-stone-600 focus:outline-none' name="" id="" cols="92" rows="6"></textarea>
            </div>
            <div>
                <h1 className=' text-xl text-stone-700 font-semibold'>Description</h1>
                <p className=' text-sm text-stone-600 mb-4'>Get noticed by the right buyers with visual examples of your services.</p>
                
            </div>
        </div>
    </div>
  )
}
