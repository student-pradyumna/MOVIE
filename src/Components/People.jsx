
 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";
const People = () => {
  document.title = "Bollyfix || Movie";
  const navigate = useNavigate();
  const [category, setcategory] = useState('popular');
  const [Person, setPerson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setpage((prevPage) => prevPage + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log("error:", err);
    }
  };

  const refershhandler = () => {
    if (Person.length === 0) {
      getPerson();
    } else {
      setpage(1);
      setPerson([]);
      sethasMore(true);
      getPerson();
    }
  };

  useEffect(() => {
    refershhandler();
  }, [category]);
   return Person.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>{""}People
         <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={Person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={Person} title='person' />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};


export default People