import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualMovie.css";
import API_KEY from "../../secret";
import axios from "axios";

export default function IndividualMovie({ id, title, description, image }) {
	const movieId = useParams().movieId;
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}`,
					{ params: { api_key: API_KEY } }
				);

				if (response.data) {
					setMovie(response.data);
				} else console.log("No movie found");
			} catch (err) {
				console.log(err);
			}
		};
		fetchMovie();
	}, []);

	return (
		<>
			{!movie.title ? (
				<div className="alert alert-danger" role="alert">
					No movie found for this ID
				</div>
			) : (
				<div>
					<div className="card mb-3 individualmovie">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									className="img-fluid rounded-start"
									alt="..."
								/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{movie.title}</h5>
									<h6>{movie.tagline}</h6>
									<hr />
									<p>Release Date: {movie.release_date} </p>
									<p>Runtime: {movie.runtime} minutes</p>
									<p>Rating: {Math.round(movie.vote_average)} / 10</p>
									<p>
										Genre:{" "}
										{movie.genres.map((genre) => {
											return <span key={genre.id}>{genre.name}, </span>;
										})}
									</p>
									<p className="card-text">{movie.overview}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
