import { NavLink } from "react-router-dom";
import BellIcon from "../../assets/icons/BellIcon";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import LogoIcon from "../../assets/logo/LogoIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import styled from "styled-components";
import GlobalColors from "src/styles/color/colors";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledNavbar = styled.div`
	display: flex;
	justify-content: row;
	align-items: center;
	max-width: 1200px;
	margin: auto;
	padding: 20px 0;
`;

const WrapperIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 99px;
	height: 50px;
	width: 50px;
	transition: 0.3s ease-in-out;
	font-size: 1.2rem;

	svg {
		height: 2rem;
	}

	&:hover {
		background-color: ${GlobalColors.WHITE_TRANSPARENT};
		> * {
			color: black;
		}
	}
`;

const Logo = styled(LogoIcon)`
	color: ${GlobalColors.RED};
	transition: 0.3s ease-in-out;
`;

const Menus = styled.ul`
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
`;

const MenuItem = styled.li`
	padding: 16px 16px;
	&:hover {
		border-radius: 30px;
		background-color: ${GlobalColors.WHITE_TRANSPARENT};
	}
`;

const WrapperInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${GlobalColors.WHITE_TRANSPARENT};
	width: 900px;
	border-radius: 45px;
	margin: 0 10px;
`;

const Search = styled(SearchIcon)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 20px;
`;

const SearchInput = styled.input`
	width: 100%;
	margin: 0 20px;
	padding: 15px 20px 15px 0;
	border: none;
	background-color: ${GlobalColors.WHITE_TRANSPARENT};
	color: ${GlobalColors.FONT_GREY};
	&:focus {
		outline: none;
	}
`;

const UserIcon = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 99px;
	height: 25px;
	width: 25px;
	margin: 12px;
	background-color: ${GlobalColors.WHITE_TRANSPARENT};
`;

const NavbarDekstop: React.FC = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleScroll = () => {
		window.pageYOffset > 40 ? setShowNavbar(true) : setShowNavbar(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<StyledNavbar>
			<WrapperIcon>
				<Logo />
			</WrapperIcon>
			<Menus>
				<NavLink to="/" exact onClick={() => window.location.replace("/")}>
					<MenuItem>Home</MenuItem>
				</NavLink>
				<NavLink
					to="/today"
					exact
					onClick={() => window.location.replace("/today")}>
					<MenuItem>Today</MenuItem>
				</NavLink>
			</Menus>
			<WrapperInput>
				<label htmlFor="search">
					<Search />
				</label>
				<SearchInput id="search" placeholder="search" />
			</WrapperInput>
			<WrapperIcon>
				<BellIcon />
			</WrapperIcon>
			<WrapperIcon>
				<UserIcon>A</UserIcon>
			</WrapperIcon>
			<WrapperIcon>
				<DownArrowIcon />
			</WrapperIcon>
		</StyledNavbar>
	);
};

export default NavbarDekstop;
