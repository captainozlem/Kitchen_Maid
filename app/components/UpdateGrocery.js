import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updatedGrocery} from '../redux/grocery';
//import {Link} from 'react-router-dom';
import GroceryForm from './GroceryForm';

class UpdateGrocery extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      amount: 0,
      unit: ''
    };
  }

  componentDidMount() {
    const groceryId = Number(this.props.match.params.groceryId);
    const {groceries} = this.props;
    const grocery = groceries.filter(
      singleItem => singleItem.id === groceryId
    )[0];
    this.setState(grocery);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateGroceryToStore(this.state);
    this.setState({
      item: '',
      amount: 0,
      unit: ''
    });
  };

  render() {
    return (
      <GroceryForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    groceries: state.groceries
  };
};

const mapDispatchToPropsUpdateGrocery = dispatch => {
  return {
    updateGroceryToStore: grocery => dispatch(updatedGrocery(grocery))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPropsUpdateGrocery
)(UpdateGrocery);
