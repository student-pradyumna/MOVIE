 import React, { useEffect } from 'react';
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Moviedetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.movie.info);

  console.log(info && info.watchproviders);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id, dispatch]); // ✅ Fixed: added missing dependencies

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.profile_path || ''
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-screen h-screen px-[10%]"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
        <a target="_blank" href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
        {/* ✅ Fixed: target typo from '_blanl' to '_blank' */}
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
      </nav>

      {/* Part 2 navigation */}
      <div className="w-full flex">

        <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />
        <div className='content ml-[5%] text-white'>
          <h1 className='text-5xl font-black  '>{ info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            <small className='text-2xl font-bold text-zinc-200'>({info.detail.release_date.split("-")[0]})</small>
          </h1>
         <div className='mt-3 mb-5 flex   items-center gap-x-3 '>
          <span className=' rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] flex justify-center items-center'>
            {(info.detail.vote_average *10).toFixed()} <sup>%</sup>
            </span>
            <h1 className='w-[60px] font-semibold text-2xl leading-6  '>User Score</h1>
            <h1> {info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g)=>g.name).join(',')}</h1>
            <h1>{info.detail.runtime}min</h1>
         </div>
         <h1 className='text-1xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>

         <h1 className='text-2xl mt-5 mb-3 '>Overview</h1>
         <p>{info.detail.overview}</p>
         
        



        </div>
      </div>

      {/* Part 3 available on paltform*/}
      <div className='w-[80%] flex flex-col gap-y-5 mt-10'>    
{info.watchproviders && info.watchproviders.flatrate && (
  <div className='flex gap-x-10 items-center text-white'>
    <h1>Available platform</h1>
    {info.watchproviders.flatrate.map((w, i) => (
      <img
            title={w.provider_name}

        key={i}
        className="w-[5vh] h-[5vh] object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
        alt=""
      />
    ))}
  </div>
)}


 {info.watchproviders && info.watchproviders.rent && (
  <div className='flex gap-x-10 items-center text-white'>
    <h1>Available on Rent</h1>
    {info.watchproviders.rent.map((w, i) => (
      <img
            title={w.provider_name}

        key={i}
        className="w-[5vh] h-[5vh] object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
        alt=""
      />
    ))}
  </div>
)}

        {info.watchproviders && info.watchproviders.buy && (
  <div className='flex gap-x-10 items-center text-white'>
    <h1>Available to Buy</h1>
    {info.watchproviders.buy.map((w, i) => (
      <img
      title={w.provider_name}
        key={i}
        className="w-[5vh] h-[5vh] object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
        alt=""
      />
    ))}
  </div>
)}
          </div>  
        </div>
    
  ) : (
    <Loading />
  );
};

export default Moviedetails;
