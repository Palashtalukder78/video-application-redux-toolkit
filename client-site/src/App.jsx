import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/common/header/Navbar";
import Footer from "./components/common/footer/Footer";
import Home from './pages/Home';
import SingleVideo from './pages/SingleVideo'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/videos/:videoId" element={<SingleVideo />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
