import { Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/AboutUs"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={About} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
