import "./App.css";
import MainRoute from "routers";
import { BrowserRouter as Router } from "react-router-dom";

import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/styles.css";

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
