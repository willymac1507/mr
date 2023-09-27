import { Component } from 'react';
import { CardList } from './components/card-list/CardList.jsx';
import './App.css';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) =>
                this.setState(() => {
                    return { monsters: json };
                }),
            );
    }

    onSearchChange = (e) => {
        const searchField = e.target.value.toLowerCase();
        this.setState(() => {
            return { searchField };
        });
    };

    render() {

        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });
        return (
            <div className="App">
                <div className="search">
                    <SearchBox onChangeHandler={onSearchChange} name={'search'} id={'search'}
                               placeholder={'search monsters'}/>
                </div>
                <div className="cards">
                    <CardList monsters={filteredMonsters}/>
                </div>
            </div>
        );
    }
}

export default App;
