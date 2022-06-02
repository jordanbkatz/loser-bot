import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import { Home, Commands, Donate, Error } from '../../pages';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/commands" element={<Commands />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;