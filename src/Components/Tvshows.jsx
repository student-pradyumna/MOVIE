 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
// ✅ Correct if inside same Components folder
import Topnav from "./partials/Topnav"; // ✅ Required


import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";



const Tvshows = () => {
    document.title = "Bollyfix || Tv shows";
  const navigate = useNavigate();
  const [category, setcategory] = useState('airing_today');
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const gettv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage((prevPage) => prevPage + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log("error:", err);
    }
  };

  const refershhandler = () => {
    if (tv.length === 0) {
      gettv();
    } else {
      setpage(1);
      settv([]);
      sethasMore(true);
      gettv();
    }
  };

  useEffect(() => {
    refershhandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{""}Tv shows
         <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={gettv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows
  