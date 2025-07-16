import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({ data }) => {
  
  return (
    <React.Fragment>
      <div className='w-[100%] flex overflow-y-hidden mb-5 p-5'>
        {data && data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] h-full bg-zinc-900 mr-5 mb-5'>
            <img
              className='w-full h-[55%] object-cover'
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || ''}`}
              alt={d.name || d.title || d.original_name || d.original_title || 'No title'}
            />
            <div className='text-white p-3 h-[45%]'>
              <h1 className='text-xl font-semibold text-white'>
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className='text-white overflow-hidden text-ellipsis'>
                {(d.overview ? d.overview.slice(0, 50) : '')}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  )
}

export default HorizontalCards
