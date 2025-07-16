 
import React from 'react'
 
import { Link } from 'react-router-dom'

const Sidenav = () => {
   
  
  return (
    <div className="w-3/4 sm:w-1/2 md:w-[20%] h-full border-r-2 border-zinc-400 p-4 sm:p-6 md:p-10 overflow-y-auto max-h-screen bg-[#18181B]">
      <h1 className='text-lg sm:text-xl md:text-2xl text-white font-bold flex items-center'>
        <i className="text-[#6556CD] ri-tv-fill text-lg sm:text-xl md:text-2xl mr-2"></i>
        <span className='text-lg sm:text-xl md:text-2xl'>Movie APP</span>
      </h1>
            <nav className='flex flex-col text-zinc-400 text-base sm:text-lg md:text-xl gap-2 sm:gap-3 leading-normal'>
        <h1 className='text-white font-semibold text-base sm:text-lg md:text-xl mt-6 sm:mt-10 mb-3 sm:mb-5'>New feeds</h1>

        <Link to='/trending' className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className="mr-2 ri-fire-fill"></i>Trending</Link>
        <Link to='/popular'className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className=" mr-2 ri-bard-fill"></i>Popular</Link>
        <Link to='/movie' className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className="ri-movie-2-ai-fill"></i>Movies</Link>
        <Link to='/tv' className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className="mr-2 ri-tv-2-fill"></i>TV shows</Link>
        <Link to='/person' className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className="mrr-2 ri-team-fill"></i>People</Link>
      </nav>
    <hr className='border-none h-[1px] bg-zinc-400' />

      <nav className='flex flex-col text-zinc-400 text-base sm:text-lg md:text-xl gap-2 sm:gap-3 leading-normal'>
        <h1 className='text-white font-semibold text-base sm:text-lg md:text-xl mt-6 sm:mt-10 mb-3 sm:mb-5'>Website Information</h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className="mr-2 ri-information-2-line"></i>About Movie</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 sm:p-4 md:p-5"><i className="mr-2 ri-phone-fill"></i>Contact</Link>
         
      </nav>
    </div>
  );
};
export default Sidenav;