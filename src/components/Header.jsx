import "./Header.css";
import logo from "../assets/movies-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function Header({ listChoice, changeListHandler }) {
	return (
		<nav className="navbar">
			<div className="container-fluid d-flex text-dark text-center">
				<div className="row d-flex justify-content-between navbar-content">
					<div className="col-sm-12 col-md-4 my-1">
						<Link to="/" style={{ textDecoration: "none", color: "black" }}>
							<img
								src={logo}
								alt="My Favourite MOvies"
								width="80"
								// height="48"
								className="d-inline-block align-text-top"
							/>
						</Link>
					</div>
					<div className="col-sm-12 col-md-4 my-1">
						<h4>Your Favourite Movie DB</h4>
					</div>
					<div className="col-sm-12 col-md-4 my-1">
						<Link to="/" style={{ textDecoration: "none", color: "black" }}>
							<h1>TMDB</h1>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
