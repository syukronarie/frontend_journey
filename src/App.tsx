import "./App.scss";
// import PrimaryButton from "./components/atoms/button/Button";
// import { ThemeProvider } from "styled-components";
// import { darkTheme } from "./styles/theme";
import NavbarDekstop from "./components/navbar/NavbarDekstop";

function App() {
	return (
		<>
			<NavbarDekstop />
			{/* <ThemeProvider theme={darkTheme}> */}
			<div className="row">
				{Array.from({ length: 2 }).map((e, i) => (
					<div className="image">
						<img src={`https://source.unsplash.com/random/${i}`} alt="" />
					</div>
				))}
			</div>
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
