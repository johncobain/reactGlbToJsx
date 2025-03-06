import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModelViewer from "./components/pages/ModelViewer";
import ModelViewer2 from "./components/pages/ModelViewer2";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelViewer />} />
        <Route path="/gltf" element={<ModelViewer2 />} />
      </Routes>
    </Router>
  );
}
