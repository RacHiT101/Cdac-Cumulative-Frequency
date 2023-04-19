import "./App.css";
import Balloon from "./components/Balloon";
// import Balloon from "./components/Balloon";
import FrequencyTable from "./pages/FrequencyTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page3TH from "./pages/Page3TH";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FrequencyTable />} />
        <Route  path="/page" element={<Page3TH />} />
      </Routes>
    </Router>
  );
}

export default App;
