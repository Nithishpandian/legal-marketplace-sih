import Intro from '@/components/home/Intro'
import LawyerCard from '@/components/home/LawyerCard'

export default function Home() {
  return (
    <div className='px-28 py-28'>
      <Intro/>
      <div>
        <div className=' flex items-center justify-center gap-3 mt-16 mb-8'>
          <input type="text" placeholder='Search something' className=' border border-stone-400 py-2 px-5 rounded-3xl w-96' />
          <button className='bg-[#ff6262] border border-[#ff9696] text-slate-50 py-2 px-5 font-medium rounded-3xl'>Search</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-y-12 gap-x-1 py-5 px-12'>
        <LawyerCard/>
        <LawyerCard/>
        <LawyerCard/>
        <LawyerCard/>
        <LawyerCard/>
        <LawyerCard/>
        <LawyerCard/>
      </div>
    </div>
  )
}
