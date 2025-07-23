 import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl min-h-[70vh] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.8)] p-12 animate-fade-in flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6 text-center">🎬 About Movie</h1>

          <p className="text-zinc-300 text-lg mb-4 leading-relaxed text-justify">
            Movies, a powerful form of storytelling, transport audiences to different worlds, evoke emotions, and offer unique perspectives. They serve as a source of entertainment, escapism, and cultural exchange, impacting viewers through compelling narratives, captivating visuals, and resonant themes. From the earliest cinematic inventions to today's sophisticated productions, movies continue to evolve, influencing art, culture, and society. 
          </p>

          <p className="text-zinc-400 text-base mb-6 text-justify">
            This app is built using <span className="text-blue-400 font-semibold">React</span>, 
            <span className="text-purple-400 font-semibold"> Redux</span>, 
            <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>, and powered by 
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300 transition ml-1"
            >
              TMDB API
            </a>.
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-zinc-500 mb-4">Made with ❤ by Pradyumna Katual</p>
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-md"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
