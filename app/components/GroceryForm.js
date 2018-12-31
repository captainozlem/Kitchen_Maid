import React, {Component} from 'react';

const GroceryForm = props => {
  const {handleSubmit, handleChange, itemName, amount, unit} = props;
  // it makes the clean DOM component
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        type="text"
        name="itemName"
        onChange={handleChange}
        value={itemName}
        placeholder="I need this item"
      />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        name="amount"
        onChange={handleChange}
        value={amount}
        placeholder="How much do you need this item"
      />
      <label htmlFor="unit">Unit:</label>
      <input
        type="text"
        name="unit"
        onChange={handleChange}
        value={unit}
        placeholder="Lbs / Pcs / Oz / Kg?"
      />
      <button type="submit">Add to My List</button>
    </form>
  );
};

export default GroceryForm;
