import "./App.css";
import HomePage from "./pages/HomePage";
import Nqueens from "./pages/Nqueens";
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
        <Route path="/nqueens" element={<Nqueens />} />
      </Routes>
    </Router>
  );
}

export default App;
