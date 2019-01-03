const {db, GroceryList, User} = require('./server/db');

const seed = async () => {
  await db.sync({force: true});

  await GroceryList.create({
    item: 'Carrot',
    amount: '2',
    unit: 'lbs'
  });

  await GroceryList.create({
    item: 'English Cucumber',
    amount: '3',
    unit: 'pcs'
  });

  await User.create({
    username: 'Ozlem',
    email: 'ozlem@email.com',
    password: '12345'
  });

  db.close();
  console.log(`

    Seeding is successful!
    Time to do stuff!

  `);
};

seed().catch(err => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
