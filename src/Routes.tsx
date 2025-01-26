import { Routes as RouterRoutes, Route } from "react-router-dom";
import { CoffeeRecommender } from "./pages/CoffeeRecommender";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<CoffeeRecommender />} />
  </RouterRoutes>
);

export default Routes;