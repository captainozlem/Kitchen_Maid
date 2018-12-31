import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const SingleItem = props => {
  const {groceries} = props;

  const groceryId = Number(props.match.params.groceryId);
  //dynamic search
  if (groceries.length > 0) {
    const grocery = groceries.filter(
      singleItem => singleItem.id === groceryId
    )[0];

    return (
      <div className="SingleItem">
        <h3>{grocery.item}</h3>
        <p>
          {grocery.amount} {grocery.unit}{' '}
        </p>
        <Link to={`/groceries/${grocery.id}/edit`}>
          <button type="button">EDIT</button>
        </Link>
      </div>
    );
  } else {
    return <div>Upps there is an error</div>;
  }
};

const mapStateToProps = state => {
  return {
    groceries: state.groceries
  };
};

export default connect(mapStateToProps)(SingleItem);
