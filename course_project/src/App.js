import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route  path="/Projects" element={<Projects />}></Route>
          <Route  path="/Company" element={<Company />}></Route>
          <Route  path="/Contact" element={<Contact />}></Route>
          <Route  path="/NewProject" element={<NewProject />}></Route>
          <Route  path="/Project/:id" element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
