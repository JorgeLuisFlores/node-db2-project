const db = require('../data/dbConfig.js');

module.exports = {
    get,
    insert
};


function get() {
    return db('cars');
}


function insert(cars) {
    return db("cars")
        .insert(cars, "id")
        .then(([id]) => this.get(id));
}