import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			<Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
			<Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
			<Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
			<Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
			<Row title="History Movies" fetchUrl={requests.fetchHistoryrMovies} />
			<Row title="Drama" fetchUrl={requests.fetchDrama} />
		</div>
	);
}

export default App;