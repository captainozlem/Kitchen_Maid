import React from 'react';

const Oauth = props => {
  return (
    <form method="get" action="/auth/google">
      <button type="submit" className="btn bg-red white p1 rounded">
        Login with Google
      </button>
    </form>
  );
};

export default Oauth;
