import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Commands from './pages/Commands';
import Home from './pages/Home';
import Stats from './pages/Stats';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/commands" element={<Commands />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </Router>
    );
};

export default App;