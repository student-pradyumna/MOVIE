 import React from 'react';
import { Link } from 'react-router-dom';
import noimage from '/noimage.webp'

const HorizontalCards = ({ data }) => {
  return (
    <React.Fragment>
      <div className="flex overflow-x-auto overflow-y-hidden mb-5 p-5  ">
        {data && data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[35vh] bg-zinc-900 mr-5 mb-5 rounded-md overflow-hidden"
          >
            {/* <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || ''}`}
              alt={d.name || d.title || d.original_name || d.original_title || 'No title'}
            /> */}
            <img
  className="w-full h-[55%] object-cover"
  src={
    d.poster_path
      ? `https://image.tmdb.org/t/p/original/${d.poster_path}`
      : '/noimage.jpg' // or .png depending on your file type
  }
  alt={d.name || d.title || d.original_name || d.original_title || 'No title'}
  loading="lazy"
/>

            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className="text-xl font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-white text-sm leading-snug">
                {(d.overview ? d.overview.slice(0, 50) : '')}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HorizontalCards;
