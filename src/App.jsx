import { CardList } from './components/card-list/CardList.jsx';
import { SearchBox } from './components/search-box/SearchBox';
import { useState, useEffect } from 'react';
import './App.css';

export const App = () => {

    const [searchField, setSearchField] = useState('',);
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    console.log('render');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setMonsters(json)
            );
    }, []);

    useEffect(() => {
        setFilteredMonsters(
            monsters.filter((monster) => {
                return monster.name.toLowerCase().includes(searchField);
            }));
    }, [searchField, monsters]);

    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className={'app-title'}>Monsters Rolodex</h1>
            <SearchBox onChangeHandler={onSearchChange} name={'search'} id={'search'}
                       placeholder={'search monsters'}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );

};
