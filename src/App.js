
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navigation";
import Footer from "./components/footer";

import Landing from "./pages/Landing"

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <div id="page-container">
                <Routes>
                    <Route path="/" element={ <Landing /> }/>
                    <Route path="/skills" element={ <Landing /> }/>
                    <Route path="/projects" element={ <Landing /> }/>
                    <Route path="/resume" element={ <Landing /> }/>
                    <Route path="/contact" element={ <Landing /> }/>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;