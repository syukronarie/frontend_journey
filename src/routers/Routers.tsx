import { Switch, Route } from "react-router-dom";
import ImageDetail from "src/components/pages/ImageDetail/ImageDetailPage";
import ImageHomePage from "../components/pages/ImageHome/ImageHomePage";

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
