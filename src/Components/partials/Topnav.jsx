import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import noimage from '/noimage.webp'

const Topnav = () => {
  const [query, setquery] = useState("")
  const [searches, setsearches] = useState([])

  useEffect(() => {
    if (!query) {
      setsearches([])
      return
    }
    const handler = setTimeout(() => {
      getsearches()
    }, 500) // 500ms debounce
    return () => clearTimeout(handler)
  }, [query])

  const getsearches = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=e93c93f89fe99459457a6fb6814e1b55&query=${query}`)
      setsearches(data.results)
    } catch (err) {
      console.log('error:', err)
    }
  }

  return (
    <div className='w-[80%] h-[10vh] relative flex  mx-auto items-center'>
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder='Search Anythings'
      />
      {query.length > 0 && (
        <i onClick={() => setquery("")} className="  text-3xl text-zinc-400 ri-close-fill right-0"></i>
      )}

      <div className='z-[100] absolute w-[50%] bg-zinc-200 top-[100%] left-[4%] overflow-auto max-h-[50vh]'>
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
          
          key={i} className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>
            <img
             className='w-[10vh] h-[10vh] object-cover rounded mr-6 sahdow-lg' 
            src={
              s.backdrop_path || s.profile_path ?`https://image.tmdb.org/t/p/original/${
         s.backdrop_path || s.profile_path
            }` :noimage
          } alt='' />
            <span>{s.name||s.title||s.original_name||s.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Topnav