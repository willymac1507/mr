import './card.css';

export const Card = ({ monster }) => {
    const { name, email, id } = monster;
    return (
        <>
            <div className="card-container" key={id}>
                <img className="card-image" src={`https://robohash.org/${id}?set=set2&size=180x180`}
                     alt="monster"/>
                <h2 className="card-name">{name}</h2>
                <p>{email}</p>
            </div>
        </>
    );
};