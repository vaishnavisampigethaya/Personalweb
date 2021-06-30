import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/" component={Home} exact></Route>
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
