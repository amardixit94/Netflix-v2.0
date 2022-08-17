const API_KEY = 'f69f337150ffdef0d48841c52b3e747d';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
	fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	fetchHistoryrMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
	fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
	fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
	fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
};

export default requests;