import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import axios from "axios";
import API_KEY from "../../secret";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndividualMovie from "./IndividualMovie";

function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [singleMovie, setSingleMovie] = useState();
	const [listType, setListType] = useState("NOW PLAYING");

	const chooseListHandler = (listVariable) => {
		setListType((prevState) => {
			prevState = listVariable;
			return listVariable;
		});
	};

	const fetchMovies = async (fetchList) => {
		let listVariable = "now_playing";
		switch (fetchList) {
			case "POPULAR": {
				listVariable = "popular";
				break;
			}

			case "NOW PLAYING": {
				listVariable = "now_playing";
				break;
			}
			case "TOP RATED": {
				listVariable = "top_rated";
				break;
			}
			case "UPCOMING": {
				listVariable = "upcoming";
				break;
			}
			default: {
				break;
			}
		}
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${listVariable}`,
				{ params: { api_key: API_KEY } }
			);
			return setMovies(response.data.results);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchMovies(listType);
	}, [listType]);

	return (
		<div>
			<Router>
				<Header />

				<Routes>
					<Route
						path="/"
						element={
							<MovieList
								movies={movies}
								list={listType}
								selectMovie={setSingleMovie}
								listChoice={listType}
								changeListHandler={chooseListHandler}
							/>
						}
					></Route>
					<Route path="/:movieId" element={<IndividualMovie />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default MoviesPage;
