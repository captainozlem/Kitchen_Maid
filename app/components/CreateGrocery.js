import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroceryForm from './GroceryForm';
import {postGrocery} from '../redux/grocery';

export class CreateGrocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      amount: 1,
      unit: ''
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.item]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // try-catch is always important, and handy, if there is an error we can see the location easily
    try {
      this.props.postGrocery(this.state);
      this.setState({item: ''});
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <GroceryForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state} // {...this.state} (same)
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postGrocery: newGrocery => dispatch(postGrocery(newGrocery))
  };
};

const ConnectedCreateGrocery = connect(
  null,
  mapDispatchToProps
)(CreateGrocery);

export default ConnectedCreateGrocery;
