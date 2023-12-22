const key = process.env.REACT_APP_TMDB_KEY;
const rest = process.env.REACT_APP_TMDB_KEY; ///movie/550?api_key=${process.env.REACT_APP_TMDB_KEY}
const request = {
  fetchTrending: `/trending/all/week?api_key=${key}`,
  fetechNetflix: `discover/tv?api_key=${key}&with_networks=213`,
  fetchToprated: `/movie/top_rated?api_key=${key}&language=en-US`,
  fetchDrama: `discover/tv?api_key=${key}&with_genres=18`,
  fetchComedyMovies: `discover/tv?api_key=${key}&with_genres=35`,
  fetchMysteryMovies: `discover/tv?api_key=${key}&with_genres=9648`,
  fetchRomanticMovies: `discover/tv?api_key=${key}&with_genres=10749`,
  fetchDocumentaries: `discover/tv?api_key=${key}&with_genres=99`,
};
export default request;
