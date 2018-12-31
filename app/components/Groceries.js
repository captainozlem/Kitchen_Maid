import React from 'react';
import {connect} from 'react-redux';
import Grocery from './Grocery';
import CreateGrocery from './CreateGrocery';
import {fetchGrocery, deleteGrocery} from './redux/grocery';

export const Groceries = props => {
  const groceries = props.groceries;
  if (groceries.length === 0 || !groceries) {
    return <h2>No Items for Shopping</h2>;
  }
  return (
    <div id="groceriesContainer">
      <Grocery groceries={groceries} removeGrocery={props.removeGrocery} />
      <CreateGrocery />
    </div>
  );
};

const mapStateToProps = state => {
  //console.log('mapState ==> ', state);
  return { groceries: state.groceries };
};

const mapDispatchToProps = dispatch => {
  return {
    getGroceries: () => dispatch(fetchGrocery()),
    removeGrocery: groceryId => dispatch(deleteGrocery(groceryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groceries);

