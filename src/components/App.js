import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import initIcons from "./helpers/icons";
import Navbar from "./navigation/Navbar";
import Landing from "./pages/Landing"
import About from "./pages/About";
import Contact from "./pages/Contact"
import ShowPage from "./pages/ShowPage";
import ShowsByCategory from "./pages/ShowsByCategory";
import Footer from "./navigation/Footer"


export default function App() {
	initIcons()
  return (
    <div className="App">
			<Router>
				<Navbar />

				<Switch>
					<Route exact path='/' component = {Landing} />
					<Route path='/about' component = {About} />
					<Route path='/contact' component = {Contact} />
					<Route path='/show/:showID' component={ShowPage} />
					<Route path='/categories' component={ShowsByCategory} />
				</Switch>
				<Footer />
			</Router>
    </div>
  );
}


