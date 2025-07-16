 import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/popular";
import Movie from "./Components/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import Moviedetails from "./Components/Moviedetails";
import Tvdetails from "./Components/Tvdetails";
import Persondetails from "./Components/Persondetails";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        
      </Routes>
    </div>
  );
}

export default App;
