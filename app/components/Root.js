import React from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import AllGroceries from './AllGroceries';
import AllRecipes from './AllRecipes';
import Grocery from './Grocery';
import Recipe from './Recipe';
import UpdateGrocery from './UpdateGrocery';
import {Navbar} from './Navbar';
import {connect} from 'react-redux';
import {fetchRecipes} from '../redux/recipes';
import {fetchGrocery} from '../redux/grocery';
import {Home} from './Home';

export class Root extends React.Component {
  componentDidMount() {
    // Huh, I wonder what this mysterious componentDidMount is doing here... 🤔

    this.props.fetchInitialGrocery();
    this.props.fetchInitialRecipes();
  }
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/robots" component={AllRobots} />
            <Route exact path="/projects" component={AllProjects} />
            <Route exact path="/robots/:robotId/edit" component={UpdateRobot} />
            <Route path="/robots/:robotId" component={SingleRobot} />
            <Route path="/projects/:projectId" component={SingleProject} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    robots: state.robots,
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialRobots: () => dispatch(fetchRobots()),
    fetchInitialProjects: () => dispatch(fetchProjects())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
