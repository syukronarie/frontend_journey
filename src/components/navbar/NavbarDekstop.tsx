import { useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import BellIcon from "../../assets/icons/BellIcon";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import LogoIcon from "../../assets/logo/LogoIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import styled from "styled-components";
import GlobalColors from "src/styles/color/colors";
import { useEffect, useState } from "react";
import Sizing from "src/styles/Sizing";

const StyledNavbar = styled.div`
	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
		transition: 0.5s ease-out;
		background-color: #fff;
		height: ${Sizing.NAVBAR_HIGHT};
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
		width: 800px;
		border-radius: 45px;
		margin: 0 10px;
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

	.userIcon {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 99px;
		height: 25px;
		width: 25px;
		margin: 12px;
		background-color: ${GlobalColors.WHITE_TRANSPARENT};
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

const NavbarDekstop: React.FC = () => {
	const [shadowNavbar, setShadowNavbar] = useState(false);
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

	return (
		<StyledNavbar>
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
					<NavLink
						to="/today"
						exact
						onClick={() => window.location.replace("/today")}>
						<li className="menuItem">Today</li>
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
					<BellIcon />
				</div>
				<div className="wrapperIcon">
					<p className="userIcon">A</p>
				</div>
				<div className="wrapperIcon">
					<DownArrowIcon />
				</div>
			</nav>
		</StyledNavbar>
	);
};

export default NavbarDekstop;
