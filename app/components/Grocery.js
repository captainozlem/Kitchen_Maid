import React from 'react';
import {Link} from 'react-router-dom';

const Grocery = props => {
  const groceries = props.groceries || [];
  const removeGrocery = props.removeGrocery;
  return (
    <div className="grocery">
      <h1>LIST OF ITEMS</h1>
      {groceries.map(grocery => (
        <div key={grocery.id}>
          <Link to={`/groceries/${grocery.id}`}>
            <h3>{grocery.item}</h3>
          </Link>
          <p>
            {grocery.amount} {grocery.unit}
          </p>
          <button type="button" onClick={() => removeGrocery(grocery.id)}>
            REMOVE ITEM
          </button>
        </div>
      ))}
    </div>
  );
};

export default Grocery;
