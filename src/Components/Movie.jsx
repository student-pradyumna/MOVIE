 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const Movie = () => {
  document.title = "Bollyfix || Movie";
  const navigate = useNavigate();
  const [category, setcategory] = useState('now_playing');
  const [Movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setpage((prevPage) => prevPage + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log("error:", err);
    }
  };

  const refershhandler = () => {
    if (Movie.length === 0) {
      getMovie();
    } else {
      setpage(1);
      setMovie([]);
      sethasMore(true);
      getMovie();
    }
  };

  useEffect(() => {
    refershhandler();
  }, [category]);

  return Movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{""}Movie
         <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="category"
            options={["now_playing", "popular", "top_rated", "upcoming"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={Movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={Movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
