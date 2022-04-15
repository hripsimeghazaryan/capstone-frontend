import { React } from 'react';

import CardModal from './Modal';
import CardComponent from './Card';

function CardList(props) {
    const iterations = [0, 1, 2, 3, 4, 5];
    return (
        <div className="card-list-component">
            {iterations.map(() => {
                return (
                    <CardComponent />
                )
            })}
        </div>
    )
}

export default CardList;