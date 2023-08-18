import "./App.css";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import NavBar from "./component/NavBar";
// import About from "./components/About";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode is enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light is enable", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <NavBar Title="TextUtility" AboutText="About" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      {/* <Switch> */}
      {/* <Route exact path="/about"> */}
      {/* <About About={"About"}/> */}
      {/* </Route> */}
      {/* <Route exact path="/"> */}
      <div className="container">
        <TextForm
          heading="Enter The Text To Anaylise"
          mode={mode}
          showalert={showalert}
        />
      </div>
      {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
