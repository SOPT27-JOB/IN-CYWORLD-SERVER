const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.User = require('./user')(sequelize, Sequelize);
// db.Result = require('./result')(sequelize, Sequelize);
// db.UserResult = require('./user_result')(sequelize, Sequelize);

// db.User.hasMany(db.Result, {onDelete:'cascade'});
// db.Result.belongsTo(db.User);

// db.User.belongsToMany(db.Result, {through:'UserResult', as: 'tested'});
// db.Result.belongsToMany(db.User, {through:'UserResult', as:'tester'});

module.exports = db;
