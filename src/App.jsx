import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ListBackgroundContainer from "./components/ListBackgroundContainer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />

      <div className="sidebar-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Sidebar />
        {/* <Sidebar text="Home" />
        <Sidebar text="About" /> */}
      </div>
      {/* <div className="ListBackgroundContainer">
        <ListBackgroundContainer />
      </div> */}
    </div>
  );
}
export default App;
