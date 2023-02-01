
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import Landing from "./pages/Landing"

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={ <Landing /> }/>
                <Route path="/skills" element={ <Landing /> }/>
                <Route path="/projects" element={ <Landing /> }/>
                <Route path="/resume" element={ <Landing /> }/>
                <Route path="/contact" element={ <Landing /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;