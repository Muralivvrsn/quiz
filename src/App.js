import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashCard from "./components/Pages/FlashCard";
import Subject from "./components/FlashCard/Subject";
import Card from "./components/FlashCard/Card";
import Home from "./components/Pages/Home";
function App() {
  return (
    <div className="bg-[#F9F9F9] flex flex-col w-screen h-screen overflow-x-hidden	">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/flashcard" element={<FlashCard />} />
            <Route path="/flashcard/:subject" element={<Subject />} />
            <Route path="/flashcard/:subject/:topic" element={<Card />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
