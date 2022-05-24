import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Commands from '../../pages/Commands';
import Premium from '../../pages/Premium';
import Error from '../../pages/Error';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/commands" element={<Commands />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;