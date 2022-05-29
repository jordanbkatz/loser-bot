import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import data from './data.json';

function Commands() {
    const [search, setSearch] = useState('');
    const handleChangeSearch = function (e) {
        setSearch(e.target.value);
    }
    const sortAlphabetical = function (a, b) {
        return (a.name < b.name) ? -1 : 1;
    }
    const filterSearch = function (command) {
        return (
            search === ''
            || search.toLowerCase().includes(command.name)
            || command.name.toLowerCase().includes(search.toLowerCase())
            || command.description.toLowerCase().includes(search.toLowerCase())
        );
    }
    return (
        <div className="main main--scroll commands">
            <div className="search">
                <FaSearch className="icon" />
                <input type="text" placeholder="search" value={search} onChange={handleChangeSearch} />
            </div>
            {
                data.sort(sortAlphabetical).filter(filterSearch).map((command, i) => (
                    <div className="command" key={i}>
                        <div className="top">
                            <div className="name">{command.name}</div>
                            {
                                command.admin && <div className="admin">Admin</div>
                            }
                        </div>
                        <div className="description">{command.description}</div>
                        <div className="usage">{command.usage}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default Commands;