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

    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const handleImage1 = (e)=>{
        const file = e.target.files[0]
        convertToBase64(file, 1)
    }
    const handleImage2 = (e)=>{
        const file = e.target.files[0]
        convertToBase64(file, 2)
    }
    const handleImage3 = (e)=>{
        const file = e.target.files[0]
        convertToBase64(file, 3)
    }
    const convertToBase64 = (file, imageNumber)=>{
        console.log(imageNumber);
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            if(imageNumber===1){
                setImage1(reader.result)
            } else if(imageNumber===2){
                setImage2(reader.result)
            } else if(imageNumber===3){
                setImage3(reader.result)
            }
        }
        reader.onerror = error => {
        console.log("Error: ", error);
        }
    }

  return (
    <div className=' py-24 pl-56 pr-80'>
        <div className='flex flex-col gap-7'>
            <div className=' flex justify-end'>
                <button className=' underline text-rose-500 font-bold hover:text-[#fc7a7a] duration-500'>Save & Preview</button>
            </div>
            <div className='grid grid-cols-5 items-center justify-center gap-7'>
                <div className=' col-span-2'>
                    <h1 className=' text-xl text-stone-700 font-semibold mb-1'>Gig title</h1>
                    <p className=' text-sm text-stone-600'>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                </div>
                <div className=' col-span-3'>
                    <input type="text" className=' border border-stone-400 rounded py-2 px-4 w-full text-stone-700 font-medium text-lg focus:outline-none' placeholder='Gig title' required/>
                </div>
            </div>
            <div className='grid grid-cols-5 items-center justify-center gap-7'>
                <div className=' col-span-2'>
                    <h1 className=' text-xl text-stone-700 font-semibold mb-1'>Category</h1>
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
                    <h1 className=' text-xl text-stone-700 font-semibold mb-1'>Search tags</h1>
                    <p className=' text-sm text-stone-600'>Tag your Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found.</p>
                </div>
                <div className=' col-span-3'>
                    <input type="text" className=' border border-stone-400 rounded py-2 px-4 h-16 w-full text-stone-700 font-medium text-lg focus:outline-none' placeholder='' required/>
                </div>
            </div>
            <div>
                <h1 className=' text-xl text-stone-700 font-semibold mb-1'>Description</h1>
                <p className=' text-sm text-stone-600 mb-4'>Briefly Describe Your Gig</p>
                <textarea className=' ml-4 border border-stone-400 rounded py-2 px-4 text-stone-600 focus:outline-none' name="" id="" cols="92" rows="6"></textarea>
            </div>
            <div>
                <h1 className=' text-xl text-stone-700 font-semibold mb-1'>Images (up to 3)</h1>
                <p className=' text-sm text-stone-600 mb-4'>Get noticed by the right buyers with visual examples of your services.</p>
                <div className="flex justify-around items-center">
                    <div className={`text-center rounded-lg border border-dashed border-gray-900/25 px-6 ${image1===""||image1===null?"py-10":"py-6"}`}>
                        {image1===""||image1==null?<p className=' text-stone-500 font-medium'>No Image</p>:<img className='mx-auto h-14 w-20 object-contain' src={image1} alt='Blog'/>}
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                            htmlFor="image1"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-[#f87575] focus-within:outline-none hover:text-rose-500 duration-300"
                            >
                            <span>Upload a file</span>
                            <input 
                                id="image1" 
                                name="image1" 
                                type="file" 
                                accept='image/'
                                className="sr-only" 
                                onChange={handleImage1}
                                required
                            />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <div className={`text-center rounded-lg border border-dashed border-gray-900/25 px-6 ${image2===""||image2===null?"py-10":"py-6"}`}>
                        {image2===""||image2==null?<p className=' text-stone-500 font-medium'>No Image</p>:<img className='mx-auto h-14 w-20 object-contain' src={image2} alt='Blog'/>}
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                            htmlFor="image2"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-[#f87575] focus-within:outline-none hover:text-rose-500 duration-300"
                            >
                            <span>Upload a file</span>
                            <input 
                                id="image2" 
                                name="image2" 
                                type="file" 
                                accept='image/'
                                className="sr-only" 
                                onChange={handleImage2}
                            />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <div className={`text-center rounded-lg border border-dashed border-gray-900/25 px-6 ${image3===""||image3===null?"py-10":"py-6"}`}>
                        {image3===""||image3==null?<p className=' text-stone-500 font-medium'>No Image</p>:<img className='mx-auto h-14 w-20 object-contain' src={image3} alt='Blog'/>}
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                            htmlFor="image3"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-[#f87575] focus-within:outline-none hover:text-rose-500 duration-300"
                            >
                            <span>Upload a file</span>
                            <input 
                                id="image3" 
                                name="image3" 
                                type="file" 
                                accept='image/'
                                className="sr-only" 
                                onChange={handleImage3}
                            />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
            <div className=' flex justify-end items-center gap-4'>
                <button className='group/button overflow-hidden relative font-roboto font-bold bg-[#fafafa] border border-[#f87575] py-2 px-6 rounded text-[#f87575]' id='#Contact'>
                    <div className="duration-300 group-hover/button:-translate-y-8 ">Cancel</div>
                    <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Cancel</div>
                </button>
                <button className='group/button overflow-hidden relative font-roboto font-bold bg-[#f87575] border border-[#f0f0f0] py-2 px-6 rounded text-[#fafafa]' id='#Contact'>
                    <div className="duration-300 group-hover/button:-translate-y-8 ">Create</div>
                    <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Create</div>
                </button>
            </div>
        </div>
    </div>
  )
}
