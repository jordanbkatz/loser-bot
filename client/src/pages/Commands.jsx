import React, { useState } from 'react';
import commandList from '../data/command-list';

const Commands = () => {
    const [search, setSearch] = useState('');
    const handleChangeSearch = e => setSearch(e.target.value);
    const sortAlphabetical = (a, b) => a.name < b.name ? -1 : 1;
    const filterSearch = command => {
        const query = search ? search.toLowerCase() : '';
        const name = command.name.toLowerCase();
        const description = command.description.toLowerCase();
        const matches = [
            query === '',
            query.includes(name),
            name.includes(query),
            description.includes(query),
        ];
        return matches.includes(true);
    };
    return (
        <div className="commands">
            <div className="container">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={handleChangeSearch}
                    />
                </div>
                {commandList.sort(sortAlphabetical).filter(filterSearch).map((command, i) => (
                    <div className="command" key={i}>
                        <div className="header">
                            <h1>{command.name}</h1>
                        </div>
                        <div className="description">
                            <p>{command.description}</p>
                        </div>
                        <div className="usage">
                            <p>{command.usage}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commands;