import React from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/user';
import LocalForm from './LoginForm';
import Oauth from './Oauth';

const Login = props => {
  const {handleSubmit} = props;

  return (
    <div className="h100 w100 flex column align-items-center justify-center">
      <h1>Let's Loggin'!</h1>
      <div className="flex w50">
        <img className="fas fa-apple-alt" />
        <div className="grow1">
          <LocalForm handleSubmit={handleSubmit} />
          <Oauth />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({email, password})).then(() => {
        ownProps.history.push('/home');
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
