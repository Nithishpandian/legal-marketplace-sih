import Intro from '@/components/home/Intro'
import LawyerCard from '@/components/home/LawyerCard'
import { lawyerData } from '@/data/data'

export default function Home() {
  return (
    <div className='px-40 py-28'>
      <Intro/>
      <div>
        <div className=' flex items-center justify-center gap-3 mt-16 mb-8'>
          <input type="text" placeholder='Search something' className=' border border-stone-400 py-2 px-5 rounded-md w-96 font-sans focus:outline-none' />
          <button className='bg-[#ff7962] hover:text-[#ff7962] hover:bg-white hover:border-[#ff7962] duration-300 border border-[#ff9696] text-slate-50 pb-1.5 pt-2 px-6  font-semibold rounded-md font-roboto'>Search</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-y-12 gap-x-1 py-5 px-12'>
        {
          lawyerData.map((data, index)=>{
            return <LawyerCard
            key={index}
            image={data.image}
            name={data.name}
            rating={data.rating}
            category={data.category}
            location={data.location}
            experience={data.experience}
            />
          })
        }

      </div>
    </div>
  )
}
