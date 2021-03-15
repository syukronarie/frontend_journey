import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarDekstop from "./components/navbar/NavbarDekstop";
import AppRoutes from "./routers/Routers";
import ImageProvider from "./utils/contexts/ProviderImageContext";

function App() {
	return (
		<ImageProvider>
			<Helmet>
				<title>Home | Journey App</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Router>
				<NavbarDekstop />
				<Suspense fallback="">
					<AppRoutes />
				</Suspense>
			</Router>
		</ImageProvider>
	);
}

export default App;
