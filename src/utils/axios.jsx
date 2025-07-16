// import axios from 'axios';
// const instance=axios.create({
//   baseURL:"https://api.themoviedb.org/3",
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer e93c93f89fe99459457a6fb6814e1b55'
//   }
  
  
// })
// export default instance;
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e93c93f89fe99459457a6fb6814e1b55"
  }
});

export default instance;
