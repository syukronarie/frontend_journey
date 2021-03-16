import { useEffect, useState, useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import GlobalColors from "src/styles/color/colors";
import Sizing from "src/styles/Sizing";
import LogoIcon from "../../assets/logo/LogoIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import BellIcon from "../../assets/icons/BellIcon";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import HomeIcon from "src/assets/icons/HomeIcon";
import UserIcon from "src/assets/icons/UserIcon";

const StyledNavbar = styled.div`
	display: flex;
	justify-content: center;

	.navbar {
		display: none;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
		transition: 0.5s ease-out;
		background-color: #fff;
		height: ${Sizing.NAVBAR_HIGHT};

		@media screen and (min-width: 768px) {
			display: flex;
		}
	}

	.navbarActive {
		z-index: 1;
		opacity: 1;
		transition: 0.5s ease-in-out;
		box-shadow: #0000001a 1px 3px 10px 0px;
	}

	.appsName {
		font-size: 1.5rem;
		font-weight: 700;
		margin-right: 14px;
	}

	.searchWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${GlobalColors.WHITE_TRANSPARENT};
		width: 700px;
		border-radius: 45px;
		margin: 0 10px;
	}

	.wrapperIcon {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 99px;
		height: 50px;
		width: 50px;
		transition: 0.3s ease-in-out;
		font-size: 1.2rem;
		color: grey;

		svg {
			height: 2rem;
		}

		&:hover {
			background-color: ${GlobalColors.WHITE_TRANSPARENT};
			> * {
				color: black;
			}
		}
	}

	.menus {
		display: flex;
		flex-flow: row;
		font-size: 0.875rem;
		font-weight: 700;

		.active {
			font-weight: bold;
			color: White;
			background-color: ${GlobalColors.BLACK};
			border-radius: 99px;
			padding: 0;

			&:hover {
				background-color: ${GlobalColors.WHITE_TRANSPARENT};
				color: ${GlobalColors.BLACK};
			}
		}
	}

	.menuItem {
		padding: 16px 16px;
		&:hover {
			border-radius: 30px;
			background-color: ${GlobalColors.WHITE_TRANSPARENT};
		}
	}

	.wrapperInput {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${GlobalColors.WHITE_TRANSPARENT};
		border-radius: 45px;
		margin: 0 10px;

		@media screen and (min-width: 768px) {
			width: 50%;
		}

		@media screen and (min-width: 1024px) {
			width: 58%;
		}
	}

	.searchInput {
		width: 100%;
		margin: 0 20px;
		padding: 15px 20px 15px 0;
		border: none;
		background-color: ${GlobalColors.WHITE_TRANSPARENT};
		color: ${GlobalColors.FONT_GREY};
		&:focus {
			outline: none;
		}
	}

	.navbarMobile {
		display: none;
		position: fixed;
		bottom: 20px;
		width: 300px;
		height: ${Sizing.NAVBAR_HIGHT};
		background-color: #fff;
		color: ${GlobalColors.FONT_GREY};
		border-radius: 90px;
		box-shadow: #0000001a 1px 3px 10px 0px;
		z-index: 1;

		@media screen and (max-width: 767px) {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;

			p {
				font-size: 14px;
				font-weight: 500;
			}
		}
	}

	.wrapperMenuMobile {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;

		svg {
			font-size: 2rem;
			padding-left: 0;
			padding-bottom: 5px;
		}
	}

	.searchMobile {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		width: 300px;
		box-shadow: #0000001a 1px 3px 10px 0px;
		background-color: #fff;
		border-radius: 99px;
		position: fixed;
		top: 20px;

		svg {
			padding-left: 10px;
		}

		.inputSearchMobile {
			width: 250px;
			margin-left: 10px;
			border: none;

			&:focus {
				outline: none;
			}
		}
	}

	.transition {
		transition: 0.3s ease-in-out;
	}
`;

const Logo = styled(LogoIcon)`
	color: ${GlobalColors.RED};
	transition: 0.3s ease-in-out;
`;

const Search = styled(SearchIcon)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 20px;
`;

const Home = styled(HomeIcon)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
`;

const NavbarDekstop: React.FC = () => {
	const [shadowNavbar, setShadowNavbar] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const history = useHistory();

	const handleSearching = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			history.push(`/?search=${e.target.value}`);
		},
		[history]
	);

	const handleScroll = () => {
		window.pageYOffset > 60 ? setShadowNavbar(true) : setShadowNavbar(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	useEffect(() => {
		console.log(showSearch);
	}, [showSearch]);

	return (
		<StyledNavbar>
			<nav className="navbarMobile">
				{showSearch && (
					<div className="searchMobile">
						<label htmlFor="search">
							<Search />
						</label>
						<input
							type="text"
							className="inputSearchMobile"
							onChange={handleSearching}
							placeholder="Search..."
						/>
					</div>
				)}
				<div className="wrapperMenuMobile">
					<NavLink to="/" onClick={() => window.location.replace("/")}>
						<Home onClick={() => setShowSearch(false)} />
					</NavLink>
					<p>Home</p>
				</div>
				<div className="wrapperMenuMobile">
					<Search onClick={() => setShowSearch(!showSearch)} />
					<p>Search</p>
				</div>
				<div className="wrapperMenuMobile">
					<BellIcon />
					<p>News</p>
				</div>

				<div className="wrapperMenuMobile">
					<UserIcon />
					<p>User</p>
				</div>
			</nav>
			<nav className={`navbar ${shadowNavbar ? "navbarActive" : ""}`}>
				<NavLink to="/" onClick={() => window.location.replace("/")}>
					<div className="wrapperIcon">
						<Logo />
					</div>
				</NavLink>
				<ul className="menus">
					<NavLink to="/" exact onClick={() => window.location.replace("/")}>
						<li className="menuItem">Home</li>
					</NavLink>
					<NavLink to="/info" exact>
						<li className="menuItem">Info</li>
					</NavLink>
				</ul>
				<div className="wrapperInput">
					<label htmlFor="search">
						<Search />
					</label>
					<input
						className="searchInput"
						onChange={handleSearching}
						id="search"
						placeholder="search"
					/>
				</div>
				<div className="wrapperIcon">
					<BellIcon className="transition" />
				</div>
				<div className="wrapperIcon">
					<UserIcon className="transition" />
				</div>
				<div className="wrapperIcon">
					<DownArrowIcon className="transition" />
				</div>
			</nav>
		</StyledNavbar>
	);
};

export default NavbarDekstop;
