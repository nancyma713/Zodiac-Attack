import React from 'react';
import Inventory from '../../data';
import Item from '../items/item_index';
import { connect } from "react-redux";
import { fetchAllItems, fetchItem } from '../../actions/item_actions';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.isLoaded) {
            this.props.fetchAllItems();
        } else {
            return null;
        }
    }

    render() {
        const animals = Object.keys(Inventory).map((animal, i) => {
            return (
                <li key={i}><Item data={Inventory[animal]}/></li>
            )
        })

        return (
            <div className='landing-page'>
                <h1>Shop your favorite zodiac posters!</h1>
                <ul>
                    {animals}
                </ul>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        items: state.items,
        isLoaded: (state.items.ox !== undefined)
    };
}

const mdp = (dispatch) => ({
    fetchAllItems: () => dispatch(fetchAllItems()),
    fetchItem: (item) => dispatch(fetchItem(item))
})

export default connect(msp, mdp)(LandingPage);