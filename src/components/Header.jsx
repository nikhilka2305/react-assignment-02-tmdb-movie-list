import "./Header.css";
import logo from "../assets/movies-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function Header({ listChoice, changeListHandler }) {
	return (
		<nav className="navbar">
			<div className="container-fluid d-flex text-dark justify-content-space-between">
				<Link to="/" style={{ textDecoration: "none", color: "black" }}>
					<img
						src={logo}
						alt="My Favourite MOvies"
						width="80"
						// height="48"
						className="d-inline-block align-text-top"
					/>
				</Link>
				<h4>Your Favourite Movie DB</h4>
				<Link to="/" style={{ textDecoration: "none", color: "black" }}>
					<h1>TMDB</h1>
				</Link>
			</div>
		</nav>
	);
}
