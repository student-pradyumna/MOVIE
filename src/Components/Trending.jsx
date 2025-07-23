import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Topnav from "./partials/Topnav";
import Dropdown from './partials/Dropdown';
import axios from "../utils/axios"
import Loading from './Loading';
import Cards from './partials/Cards';
import InfiniteScroll from "react-infinite-scroll-component"


const Trending = () => {
  const navigate=useNavigate()
  document.title="Bollyfix || Trending"
  const [category, setcategory] = useState('all')
  const [duration, setduration] = useState('day');
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/${duration}?page=${page}&api_key=e93c93f89fe99459457a6fb6814e1b55`

      );
      if(data.results.length > 0){

        settrending((prevState)=>[...prevState,...data.results])
        setpage(page+1)
      }else{

          sethasMore(false)
      }
      
    } catch (err) {
      console.log('error:', err);
    }
  };
  const refershhandler= ()=>{
    if(trending.length===0){
      getTrending()
    }else{
       setpage(1)
      settrending([]);
      getTrending()

    }
  }
  useEffect(()=>{
    refershhandler()
  },[category,duration])
  return trending.length >0 ?(
    <div className='  w-screen h-screen '>
      <div className=' px-[5%] w-full  flex items-center justify-between '>
          
        <h1 className='  text-2xl font-semibold text-zinc-400'> <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{""}Trending</h1>
        <div className='flex items-center w-[80%]'>
          <Topnav />
         <Dropdown title="category" options={["movie","tv","all"]}  func={(e)=>setcategory(e.target.value)} />
        <div className='w-[2%]'></div>
        <Dropdown title="duration" options={["week","day",]}  func={(e)=>setduration(e.target.value)}/>
        </div>
      </div>

<InfiniteScroll
    dataLength={trending.length} 
    next={getTrending}
    hasMore={hasMore}
    loader={<h1>Loading...</h1>}
>
  <Cards data={trending} title={category}/> 
</InfiniteScroll>
  

    </div>
  ): <Loading/>
}

export default Trending
 