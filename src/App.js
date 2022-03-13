import { React, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const About = lazy(() => import("./Components/About"));
const Home = lazy(() => import("./Components/Home"));
const Contact = lazy(() => import("./Components/Contact"));
const Course = lazy(() => import("./Components/Course"));
const NotFound = lazy(() => import("./Components/NotFound"));
function App() {
  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <Suspense fallback={<div>Loading....</div>}>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/course" component={Course}></Route>
              <Route path="/Personalweb" component={Home} exact></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </Suspense>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
