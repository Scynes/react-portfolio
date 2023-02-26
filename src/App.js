
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navigation";
import Footer from "./components/footer";

import Landing from "./pages/Landing"
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <div id="page-container">
                <Routes>
                    <Route path="/" element={ <Landing /> }/>
                    <Route path="/skills" element={ <Skills /> }/>
                    <Route path="/projects" element={ <Projects /> }/>
                    <Route path="/resume" element={ <Landing /> }/>
                    <Route path="/contact" element={ <Contact /> }/>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;