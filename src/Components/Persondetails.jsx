import React, { useEffect, useState } from 'react';
import { asyncloadperson, removeperson } from '../store/actions/personAction';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HorizontalCards from './partials/HorizontalCards';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Dropdown from './partials/Dropdown'


const Persondetails = () => {
  const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [Category, setCategory] = useState("movie")
      
    const info = useSelector((state) => state.person.info);
  
    console.log(info && info.watchproviders);
  
    useEffect(() => {
      dispatch(asyncloadperson(id));
      return () => {
        dispatch(removeperson());
      };
    }, [id,dispatch])
  return info ? <div className='px-[10%] w-screen h-[150vh] bg-[#1F1E24]  '>
    {/*part 1 navigation */}
     <nav className=" h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
             <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
             
      </nav>   

       
      <div className='w-full flex '>
             {/*part 2 left poster and details */}
             <div className='w-[20%]'>
              <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path }`}
          alt=""
        />
        <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

{/*social media link*/}
         <div className='text-white text-2xl flex gap-x-5'>
           <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
  <a href="https://www.facebook.com/tomcruise"><i className="ri-facebook-circle-fill"></i></a>
  <a href="https://www.instagram.com/tomcruise"><i className="ri-instagram-fill"></i></a>
  <a href="https://x.com/tomcruise"><i className="ri-twitter-x-fill"></i></a>
</div>
{/*personal information*/}
<h1 className='text-2xl text-zinc-400 font-semibold '>Person Info</h1>
<h1 className='text-lg text-zinc-400 font-semibold my-5'>Know For</h1>
<h1 className=' text-zinc-400  '>{info.detail.known_for_department}</h1>
<h1 className='text-lg text-zinc-400 font-semibold mt-3'>Gender</h1>
<h1 className=' text-zinc-400  '>{info.detail.gender===2 ? "Male" :"Female"}</h1>
<h1 className='text-lg text-zinc-400 font-semibold mt-3'>Birthday</h1>
<h1 className=' text-zinc-400  '>{info.detail.birthday}</h1>
<h1 className='text-lg text-zinc-400 font-semibold mt-3'>Deathday</h1>
<h1 className=' text-zinc-400  '>{info.detail.deathday ? info.detail.deathday :"Still Alive"}</h1>
<h1 className='text-lg text-zinc-400 font-semibold mt-3'>place of Birth</h1>
<h1 className=' text-zinc-400  '>{info.detail.place_of_birth}</h1>
<h1 className='text-lg text-zinc-400 font-semibold mt-3'>Also Know AS</h1>
<h1 className=' text-zinc-400  '>{info.detail.also_known_as?.length > 0 && (
  <h1 className='text-zinc-400'>
    {info.detail.also_known_as.join(', ')}
  </h1>
)}
</h1>
     </div>
       {/*part 3 right details and information */}

          <div className='w-[80%] ml-[5%]'>
             <h1 className='text-6xl text-zinc-400 font-black'>{info.detail.name}</h1>
<h1 className='text-xl  font-semibold my-5 text-white'>Biography</h1>
<p className='text-zinc-400 mt-3'>{info.detail.biography}</p>
<h1 className=' mt-5 text-lg  font-semibold my-5 text-white'>Summary</h1>
    <HorizontalCards data={info.combinedCredits.cast}/> 
    <div className='w-full flex justify-between'>
       <h1 className=' mt-5 text-xl  font-semibold my-5 text-white'>Acting</h1>
       <Dropdown title="category" options={["tv","movie"]} fun={(e)=>setCategory(e.target.value)}/>
    </div>
    <div className='w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5'>
      {info[Category+"Credits"].cast.map((c,i)=> <li key={i} className=' text-zinc-400 hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer'>  
      <Link  to={`/${Category}/details/${c.id}`} className=' '>
       <span className=''>{" "}{c.title || c.original_name || c.original_title}</span>
       <span className=' block ml-5 mt-2'>
          {c.character && `Character Name: ${c.character}`}
 </span>
      </Link>
      </li>)}
      
    </div>
          </div>
      </div>

   
  </div>:<Loading/>
}

export default Persondetails