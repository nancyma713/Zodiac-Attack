import React from 'react';
import Inventory from '../../data';
import Item from '../items/item_index';
import { connect } from "react-redux";
import { fetchAllItems, fetchItem } from '../../actions/item_actions';

class LandingPage extends React.Component {

    componentDidMount() {
        this.props.fetchAllItems();
    }

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

const mdp = (dispatch) => ({
    fetchAllItems: () => dispatch(fetchAllItems()),
    fetchItem: (item) => dispatch(fetchItem(item))
})

export default connect(null, mdp)(LandingPage);