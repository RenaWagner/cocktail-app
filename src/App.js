import AllCocktails from "./pages/AllCocktails";
import NavBar from "./components/NavBar";
import CocktailImage from "./pages/CocktailImage";
import AboutPage from "./pages/AboutPage";
import DetailedPage from "./pages/DetailedPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/list" component={AllCocktails}></Route>
        <Route
          path="/cocktailImage/:category+"
          component={CocktailImage}
        ></Route>
        <Route path="/cocktail/:id" component={DetailedPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
