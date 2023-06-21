const Api_key = process.env.REACT_APP_API_KEY;
const base_url = "https://api.themoviedb.org/3/";
const img_url = "https://image.tmdb.org/t/p/w185/";

const Requests = {
  trending: base_url + "trending/all/week?api_key=" + Api_key,
  originals: base_url + "discover/tv?api_key=" + Api_key + "&with_networks=213",
  topRated: base_url + "movie/top_rated?api_key=" + Api_key,
  romance:base_url + "discover/movie?api_key=" + Api_key + "&with_genres=10749",
  comedy: base_url + "discover/movie?api_key=" + Api_key + "&with_genres=35",
  action: base_url + "discover/movie?api_key=" + Api_key + "&with_genres=28",
  horror: base_url + "discover/movie?api_key=" + Api_key + "&with_genres=27",
  docu: base_url + "discover/movie?api_key=" + Api_key + "&with_genres=99",
  kDrama: base_url + "discover/tv?api_key=" + Api_key + "&with_original_language=ko",
  anime: base_url + "search/tv?api_key=" + Api_key + "&query=anime",
  drama : base_url + "discover/movie?api_key=" + Api_key + "&with_genres=18",
  thriller : base_url + "discover/movie?api_key=" + Api_key + "&with_genres=53",
  sciFi : base_url + "discover/movie?api_key=" + Api_key + "&with_genres=878",
  adventure : base_url + "discover/movie?api_key=" + Api_key + "&with_genres=12",
  animation : base_url + "discover/movie?api_key=" + Api_key + "&with_genres=16",
};

export default Requests;
export { img_url };
