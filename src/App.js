import { useState } from "react";
import "./App.css";
import About from "./Component/About";
import Accordian from "./Component/Accordian";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Tabber from "./Component/Tabber";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Table from "./Component/Table";
import Test from "./Component/FunTest";
import Crud from "./Component/Crud";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const toggleDiv = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div className="main">
        <div className={toggle ? "small-width" : "left_sidebar"}>
          <h3 style={{ color: "white" }}>FakeGPT</h3>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                {" "}
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                About
              </Link>
            </li>
            <li>
              <Link
                to="/funtest"
                className={location.pathname === "/funtest" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                Test
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/tabber"
                className={location.pathname === "/tabber" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                Tabber
              </Link>
            </li>
            <li>
              <Link
                to="/accordian"
                className={location.pathname === "/accordian" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                FAQ (Accordian)
              </Link>
            </li>
            <li>
              <Link
                to="/table"
                className={location.pathname === "/table" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                Table(Multiple Row)
              </Link>
            </li>
            <li>
              <Link
                to="/crud"
                className={location.pathname === "/crud" ? "active" : ""}
              >
                <span>
                  <i className="fa fa-angle-double-right"></i>
                </span>{" "}
                Class Component Example
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={
            toggle
              ? "right_content full-width"
              : show
              ? "right_content gr_backgound"
              : "right_content"
          }
        >
          <button onClick={toggleDiv} className="arrow_toggle_left">
            <i
              className={toggle ? "fa fa-arrow-right" : "fa fa-arrow-left"}
            ></i>
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/funtest" element={<Test />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tabber" element={<Tabber />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/crud" element={<Crud />} />
            <Route
              path="/table"
              element={<Table setShow={setShow} show={show} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
