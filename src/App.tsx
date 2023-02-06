import "./App.css";
import HomePage from "./pages/HomePage";
import Board from "./components/Board";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamecode/:gc" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
