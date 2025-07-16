import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
 import Topnav from './partials/topnav'
import axios from '../utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loading from './Loading'

const Home = () => {
  useEffect(() => {
    document.title = "Bollyfix";
  }, []);

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all")

  const getHeaderwallpaper = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=e93c93f89fe99459457a6fb6814e1b55`
      );
      let randomIndex = Math.floor(Math.random() * data.results.length);
      let randomdata = data.results[randomIndex];
      setwallpaper(randomdata);
    } catch (err) {
      console.log('error:', err);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/day?api_key=e93c93f89fe99459457a6fb6814e1b55`
      );
      settrending(data.results);
    } catch (err) {
      console.log('error:', err);
    }
  };

  useEffect(() => {
       getTrending();
    if (!wallpaper) getHeaderwallpaper();
 
  }, [category,]);

  

  return wallpaper && trending ?  (
    <div className="flex w-full h-full">
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className=' flex justify-between p-5'>
                 <h1 className='text-3xl font-semibold text-zinc-400 '>Trending</h1>
                  <Dropdown
                    title="filter"
                    options={['tv', 'movie', 'all']}
                    func={(e)=>setcategory(e.target.value)}
                  />
        
              </div>
        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <Loading/>
  );
};

export default Home

