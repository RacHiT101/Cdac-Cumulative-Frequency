import "./App.css";
import Balloon from "./components/Balloon";
// import Balloon from "./components/Balloon";
import FrequencyTable from "./pages/FrequencyTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FrequencyTable />} />
      </Routes>
    </Router>
  );
}

export default App;
