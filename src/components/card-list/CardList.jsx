import './cardList.css';

import { Card } from '../card/Card';

export const CardList = (props) => {

    const { monsters } = props;
    return (
        <div className={'cards'}>
            {monsters.map((monster) => {
                    return (
                        <Card monster={monster} key={monster.id}/>
                    );
                }
            )}
        </div>
    );
};