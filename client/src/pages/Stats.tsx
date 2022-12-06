import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CountUp from 'react-countup';

const Stats: React.FC = () => {
    const types = ['command', 'user', 'server'];
    const [stats, setStats] = useState<any>(null);
    const [index, setIndex] = useState(0);
    const handleNextStat = () => {
        setIndex(index !== types.length - 1 ? index + 1 : 0);
    };
    const handlePrevStat = () => {
        setIndex(index !== 0 ? index - 1 : types.length - 1)
    };
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await axios.get('http://localhost:6969/getStats');
                setStats(data);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchStats();
    }, []);
    return (
        <div className="stats">
            <div className="container">
                <div className="card">
                    <h1>{types[index]}s fulfilled</h1>
                    <h1>
                        <CountUp 
                            start={0}
                            end={stats ? stats[types[index]] : 0}
                            duration={1}
                            separator={','}
                        />
                    </h1>
                    <div className="controls">
                        <button onClick={handlePrevStat}>
                            <FaChevronLeft className="icon" />
                        </button>
                        <button onClick={handleNextStat}>
                            <FaChevronRight className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;