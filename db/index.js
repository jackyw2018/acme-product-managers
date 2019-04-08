const db = require('./db');
const User = require('./User');
const Product = require('./Product');

// const users = [{ name: 'moe' }, { name: 'larry' }, { name: 'curly' }];

const products = [{ name: 'bar' }, { name: 'bazz' }, { name: 'foo' }];

const users = [{ name: 'moe' }, { name: 'larry' }, { name: 'curly' }];

const syncAndSeed = () => {
  return db.sync({ force: true }).then(() => {
    const randomUserId = users => {
      return Math.round(Math.random() * users.length) || null;
    };

    return Promise.all(users.map(({ name }) => User.create({ name }))).then(
      () => {
        return Promise.all(
          products.map(({ name }) => {
            Product.create({
              name,
              userId: randomUserId(users),
            });
          })
        );
      }
    );
  });
};

Product.belongsTo(User);
User.hasMany(Product);

module.exports = {
  syncAndSeed,
  User,
  Product,
};
