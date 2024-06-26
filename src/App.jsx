import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="sidebar-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/task/:taskId" element={<ItemDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
export default App;
