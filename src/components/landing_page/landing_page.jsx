import React from 'react';
import Inventory from '../../data';
import Item from '../items/item_index';

class LandingPage extends React.Component {

    render() {
        const animals = Object.keys(Inventory).map((animal, i) => {
            return (
                <li key={i}><Item data={Inventory[animal]}/></li>
            )
        })

        return (
            <div className='landing-page'>
                <h1>Find your favorite zodiac posters!</h1>
                <ul>
                    {animals}
                </ul>
            </div>
        )
    }

}

export default LandingPage;