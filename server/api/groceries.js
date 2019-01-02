const router = require('express').Router();
const {GroceryList} = require('../db/grocery');

//GET /api/groceries

router.get('/', async (req, res, next) => {
  try {
    const response = await GroceryList.findAll();
    res.status(200).json(response);
  } catch (err) {
    if (err) res.sendStatus(500);
    next(err);
  }
});

//GET /api/groceries/:groceryId

router.get('/:groceryId', async (req, res, next) => {
  try {
    const response = await GroceryList.findById(req.params.groceryId);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//POST /api/groceries

router.post('/', async (req, res, next) => {
  try {
    const {item} = await req.body;
    //console.log('what is my body ==>', req.body);
    const newGrocery = await GroceryList.create({
      item
    });
    res.json(newGrocery);
  } catch (err) {
    next(err);
  }
});

//DELETE /api/groceries/:groceryId

router.delete('/:groceryId', async (req, res, next) => {
  try {
    await GroceryList.destroy({
      where: {
        id: req.params.groceryId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

//PUT /api/groceries/:groceryId

router.put('/:groceryId', async (req, res, next) => {
  try {
    const groceries = await GroceryList.findById(req.params.groceryId);
    const updatedGrocery = await groceries.update(req.body);
    res.json(updatedGrocery);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
