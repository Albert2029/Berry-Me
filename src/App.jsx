import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;