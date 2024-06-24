import Main from "./pages/main";
import WatchScene from "./pages/watchScene";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/video" element={<WatchScene />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
