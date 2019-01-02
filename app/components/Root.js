import React from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import {Groceries} from './Groceries';
import {SingleItem} from './SingleItem';
import {UpdateGrocery} from './UpdateGrocery';
import {Navbar} from './Navbar';
import {connect} from 'react-redux';
import {fetchGrocery} from '../redux/grocery';
import {Home} from './Home';

export class Root extends React.Component {
  componentDidMount() {
    this.props.fetchInitialGrocery();
  }
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
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
    groceries: state.groceries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialGrocery: () => dispatch(fetchGrocery())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
