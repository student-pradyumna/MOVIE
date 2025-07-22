import React, { useEffect } from 'react';
import ReactPlayer from "react-player";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound';
// import NotFound from '../NotFound' // No longer needed
const Trailer = () => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const videos = useSelector((state) => state[category]?.info?.videos);
  console.log("VIDEOS ARRAY:", videos);
  const trailer = videos?.find(v => v.type === "Trailer" && v.site === "YouTube");
  console.log("SELECTED TRAILER:", trailer);
  const videoKey = trailer?.key;

  useEffect(() => {
    if (!videoKey) {
      navigate('/notfound', { replace: true });
    }
  }, [videoKey, navigate]);

  if (!videoKey) {
    return null; // Prevents rendering anything while redirecting
  }

  return (
    <div className='bg-[rgba(0,0,0,0.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center'>
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 text-white text-2xl hover:text-[#6556CD]"
      >
        ←
      </button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000',
        borderRadius: 8,
        boxShadow: '0 4px 24px rgba(0,0,0,0.7)',
        position: 'relative', // Ensure relative positioning for absolute child
      }}>
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-close-fill text-3xl text-white"
          style={{
            position: 'absolute',
            top: -8,
            right: -34,
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
          }}
        ></Link>
          {videoKey ?(
              <iframe
          width={1280}
          height={720}
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          style={{ display: 'block', borderRadius: 8 }}
        />
          ):(
            <NotFound/>
          )}
         
      </div>
    </div>
  );
};

export default Trailer;
