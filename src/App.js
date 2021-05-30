import { Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs"
import LegalCompliance from "./Components/LegalCompliance"
import ContactUs from "./Components/ContactUs"
import Safety from "./Components/Safety/Safety"
import Product from "./Components/Product/Product"
import PlantDetails from "./Components/Plant Details/Details"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={About} />
        <Route path="/legalCompliance" component={LegalCompliance} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/safety" component={Safety} />
        <Route path="/service" component={Product} />
        <Route path="/plantDetails" component={PlantDetails} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
