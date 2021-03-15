import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
// import ImageDetail from "src/components/pages/ImageDetail/ImageDetailPage";
// import ImageHomePage from "../components/pages/ImageHome/ImageHomePage";

const ImageDetail = lazy(
	() => import("src/components/pages/ImageDetail/ImageDetailPage")
);
const ImageHomePage = lazy(
	() => import("src/components/pages/ImageHome/ImageHomePage")
);

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={ImageHomePage} />
			<Route exact path="/today" component={ImageHomePage} />
			<Route exact path="/:slug" component={ImageDetail} />
		</Switch>
	);
};

export default AppRoutes;
