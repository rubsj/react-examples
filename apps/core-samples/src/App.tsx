//import classes from './app.scss';
import { Fragment } from "react";
import styles from "./app.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./nav-bar";

const Home = () => (
  <div className={`card pt-5 ${styles["card-width"]}`}>
    <div className="card-body">
      <p className={`card-text ${styles.para}`}>Hello World</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

const NotFound = () => (
  <div className="card pt-5">
    <div className="card-body">
      <h2 className="card-text">Page not found</h2>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
