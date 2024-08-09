import Movie from "./Movie";
import "./MovieList.css";

import React from "react";

export default function MovieList({
	movies,
	list,
	selectMovie,
	listChoice,
	changeListHandler,
}) {
	return (
		<article className="mt-4">
			<section className="heading-list align-items-center d-flex">
				<div className="row heading-list-row d-flex justify-content-between align-items-center">
					<div className="col-lg-6 col-md-12 justify-content-center mx-auto">
						<h2 className="text-center mb-4">{list}</h2>
					</div>
					<div className="col-lg-6 col-md-12 d-flex justify-content-center mx-auto">
						<div className="list-chooser d-flex text-center ">
							<select
								id="listChooser"
								name="listChooser"
								className="form-select"
								aria-label="Default select example"
								value={listChoice}
								onChange={(evt) => {
									changeListHandler(evt.target.value);
								}}
							>
								{" "}
								<option value="Default" disabled>
									Choose a List
								</option>
								<option value="POPULAR">POPULAR</option>
								<option value="NOW PLAYING">NOW PLAYING</option>
								<option value="TOP RATED">TOP RATED</option>
								<option value="UPCOMING">UPCOMING</option>
							</select>
						</div>
					</div>
				</div>
			</section>
			<section className="movie-list d-flex flex-wrap justify-content-center">
				{movies.map((movie) => {
					return (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							image={movie.poster_path}
							description={movie.overview}
							selectMovie={selectMovie}
						/>
					);
				})}
			</section>
		</article>
	);
}
