import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarDekstop from "./components/navbar/NavbarDekstop";
import AppRoutes from "./routers/Routers";
import ImageProvider from "./utils/contexts/ProviderImageContext";

function App() {
	return (
		<ImageProvider>
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
