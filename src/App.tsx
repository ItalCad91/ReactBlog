import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
