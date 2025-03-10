const msql = require('mysql2promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize () {

    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password});
    await connection.query(`CREATE DATABASE IF NOT EXIST \`${database}\`;`);


const sequelize = new Sequelize(database, user, password, {dialect : 'mysql'});


db.User = require('')(sequelize);

await sequelize.sync({alter: true});
}

{
    "database": {
        "host": "localhost",
        "port": 3306,
        "user": "root",
        "password": "erica1652",
        "database": "question5"
    }
}

const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: { type: DataTypes.INT, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
    };

    return sequelize.define('users', attributes, options);
}

const router = express.Router();
router.get('/users', getAll);

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}