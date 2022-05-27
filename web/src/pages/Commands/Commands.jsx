import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Command from '../../components/Command';
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
            <div className="commands__search">
                <FaSearch className="commands__search__icon" />
                <input type="text" placeholder="search" value={search} onChange={handleChangeSearch} className="commands__search__input" />
            </div>
            {
                data.sort(sortAlphabetical).filter(filterSearch).map((command, i) => (
                    <Command data={command} key={i} />
                ))
            }
        </div>
    );
}

export default Commands;