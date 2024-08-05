import React, { useState } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

export default function Movie({ id, title, image, description, selectMovie }) {
	return (
		<>
			<Link to={`/${id}`} style={{ textDecoration: "none" }}>
				<div
					className="card"
					onClick={() => {
						// console.log(image);
						selectMovie({ id, title, description, image });
					}}
				>
					<img
						src={`https://image.tmdb.org/t/p/w500/${image}`}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
