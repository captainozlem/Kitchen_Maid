const router = require('express').Router();

// we should put custom file name as router, don`t forget to bind them like I did in Senior Project!!
router.use('/groceries', require('./groceries')); // matches all requests to /api/users/
router.use('/', require('../authentication/auth'));
// I am not sure about is it correct usage?

//404 handle
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
