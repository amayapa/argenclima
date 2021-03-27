import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Provider from "./context/context";
import LandingPage from "./components/landingPage";
import Favorites from "./components/Favorites";

function App(props) {
  // console.log("App props", props);
  return (
    <Provider className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/fav" component={Favorites} />
        <Route path="/" component={Footer} />
      </Router>
    </Provider>
  );
}

export default App;
