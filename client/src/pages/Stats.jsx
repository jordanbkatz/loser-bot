import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import axios from 'axios';

const Stats = () => {
    const [types] = useState(['command', 'user', 'server']);
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState(null);
    const nextStat = () => setIndex(index !== types.length - 1 ? index + 1 : 0);
    const prevStat = () => setIndex(index !== 0 ? index - 1 : types.length - 1);
    useEffect(() => {
        const getStat = async (type) => {
            const { data } = await axios(`https://jbk-loserbot.herokuapp.com/stats?type=${type}`);
            setValue(data.count);
        };
        getStat(types[index]);
    }, [types, index]);
    return (
        <div className="stats">
            <div className="container">
                <div className="card">
                    <h1>{types[index]}s fulfilled</h1>
                    <h1>
                        <CountUp 
                            start={0}
                            end={value}
                            duration={1}
                            separator={','}
                        />
                    </h1>
                    <div className="controls">
                        <button onClick={prevStat}>
                            <FaChevronLeft className="icon" />
                        </button>
                        <button onClick={nextStat}>
                            <FaChevronRight className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;