import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Page from "../Page";
import Semi from "../Semi";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<Page />} />
                <Route path="/main" element={<HomePage />} />
                <Route path="/project" element={<Semi />} />
            </Routes>
        </Router>
    );
}

export default App;
