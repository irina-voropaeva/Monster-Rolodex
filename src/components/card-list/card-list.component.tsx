import Card from '../card/card.component.tsx';
import { Monster } from '../../App';
import './card-list.styles.css'


type CardListProps = {
    monsters: Monster[];
}


const CardList = ({ monsters }: CardListProps) => (
        <div className='card-list'>
            {monsters.map((monster) => {
            return (
                <Card monster = {monster}/>    
                    )
            })
            }
        </div>
);

export default CardList;