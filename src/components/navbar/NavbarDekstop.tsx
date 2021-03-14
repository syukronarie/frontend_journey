import BellIcon from "../../assets/icons/BellIcon";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import LogoIcon from "../../assets/logo/LogoIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import styled from "styled-components";

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

	&:hover {
		background-color: grey;
		> * {
			color: black;
		}
	}
`;

const Logo = styled(LogoIcon)`
	color: red;
	transition: 0.3s ease-in-out;
`;

const Menus = styled.ul`
	display: flex;
	flex-flow: row;
	font-size: 16px;
	font-weight: 700;
`;

const MenuItem = styled.li`
	padding: 16px 16px;
	&:hover {
		border-radius: 30px;
		background-color: grey;
	}
`;

const WrapperInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ececec;
	width: 900px;
	border-radius: 20px;
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
	background-color: #ececec;

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
	background-color: grey;
`;

const NavbarDekstop: React.FC = () => {
	return (
		<StyledNavbar>
			<WrapperIcon>
				<Logo />
			</WrapperIcon>
			<Menus>
				<MenuItem>Home</MenuItem>
				<MenuItem>Today</MenuItem>
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
