import React from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import {Login} from './auth/Login';
import {Groceries} from './Groceries';
import {SingleItem} from './SingleItem';
import {UpdateGrocery} from './UpdateGrocery';
import {Navbar} from './Navbar';
import {connect} from 'react-redux';
import {fetchGrocery} from '../redux/grocery';
import {getMe} from '../redux/user';
import {Home} from './Home';

export class Root extends React.Component {
  componentDidMount() {
    this.props.fetchInitialGrocery();
    this.props.fetchInitialGetMe();
    // I am not sure about that..
  }
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route component={Login} />

            <Route exact path="/home" component={Home} />
            <Route exact path="/groceries" component={Groceries} />
            <Route
              exact
              path="/groceries/:groceryId/edit"
              component={UpdateGrocery}
            />
            <Route path="/groceries/:groceryId" component={SingleItem} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groceries: state.groceries,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialGrocery: () => dispatch(fetchGrocery()),
    fetchInitialGetMe: () => dispatch(getMe())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
