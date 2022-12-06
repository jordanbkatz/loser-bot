import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Commands from './pages/Commands';
import Home from './pages/Home';
import Stats from './pages/Stats';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/commands" element={<Commands />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;