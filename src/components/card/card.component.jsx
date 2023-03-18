import './card.styles.css'

const Card = ({ monster }) => (
  <div className='card-container' key={monster.id}>
    <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`}/>
    <h2 key={monster.id}>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

export default Card;
