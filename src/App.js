import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import Launch from "./components/launch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/launch" element={<Launch/>} />
        {/* <Route/> */}
      </Routes>
    </Router>
  );
}

export default App;
