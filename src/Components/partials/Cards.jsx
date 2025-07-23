 import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
  return (
    <div className="w-full min-h-screen px-6 py-10 bg-[#1F1E24]">
      <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>

      <div className="flex flex-wrap gap-6 justify-start">
        {data.map((c, i) => {
          const imagePath = c.poster_path || c.backdrop_path || c.profile_path;
          const imageUrl = imagePath
            ? `https://image.tmdb.org/t/p/original/${imagePath}`
            : '/noimage.webp'; // ✅ image from public folder

          return (
            <Link
              to={`/${c.media_type || title}/details/${c.id}`}
              className="w-[25vh] hover:scale-105 transition-transform duration-300"
              key={i}
            >
              <div className="relative">
                {/* Image */}
                <img
                  className="w-full h-[40vh] object-cover rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
                  src={imageUrl}
                  alt=""
                  loading="lazy"
                />

                {/* ⭐ Rating Badge */}
                {c.vote_average && (
                  <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] flex justify-center items-center">
                    {(c.vote_average * 10).toFixed()} <sup>%</sup>
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className="text-lg text-zinc-300 mt-2 font-semibold line-clamp-1">
                {c.name || c.title || c.original_name || c.original_title}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
