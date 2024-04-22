import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ListBackgroundContainer from "./components/ListBackgroundContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <div className="sidebar-container">
        <Sidebar text="Home" />
        <Sidebar text="About" />
      </div>
      <div className="ListBackgroundContainer">
        <ListBackgroundContainer />
      </div>
    </div>
  );
}
export default App;
