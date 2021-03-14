// import "./App.scss";
// import PrimaryButton from "./components/atoms/button/Button";
// import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarDekstop from "./components/navbar/NavbarDekstop";
import AppRoutes from "./routers/Routers";

function App() {
	return (
		<Router>
			<NavbarDekstop />
			<AppRoutes />
		</Router>
	);
}

export default App;
