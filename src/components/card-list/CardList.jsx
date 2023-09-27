import { Component } from 'react';
import './cardList.css';

export class CardList extends Component {
    render() {
        let monsters;
        ({ monsters } = this.props);
        return (
            <>
                {monsters.map(monster => (
                    <div className="card-container" key={monster.id}>
                        <img className="card-image" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                             alt="monster"/>
                        <h2 className="card-name">{monster.name}</h2>
                        <p>{monster.email}</p>
                    </div>
                ))}
            </>
        );
    }
}