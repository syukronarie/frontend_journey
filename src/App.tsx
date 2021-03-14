import { BrowserRouter as Router } from "react-router-dom";
import NavbarDekstop from "./components/navbar/NavbarDekstop";
import AppRoutes from "./routers/Routers";
import ImageProvider from "./utils/contexts/ProviderImageContext";

function App() {
	return (
		<ImageProvider>
		<Router>
			<NavbarDekstop />
			<AppRoutes />
		</Router>
		</ImageProvider>
	);
}

export default App;
