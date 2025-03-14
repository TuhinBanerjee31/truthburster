import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import FindArea from "./pages/FindArea";
import View from "./pages/View";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/findArea" element={<FindArea />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
