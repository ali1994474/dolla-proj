import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages";
import SigninPage from "./components/pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
