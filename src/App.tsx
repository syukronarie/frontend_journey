import "./App.scss";
// import PrimaryButton from "./components/atoms/button/Button";
// import { ThemeProvider } from "styled-components";
// import { darkTheme } from "./styles/theme";
import NavbarDekstop from "./components/navbar/NavbarDekstop";
import ImageContentPage from "./components/pages/ImageContent/ImageContentPage";

function App() {
	return (
		<>
			<NavbarDekstop />
			{/* <ThemeProvider theme={darkTheme}> */}
			<ImageContentPage />
			{/* </ThemeProvider> */}
		</>
	);
}

export default App;
