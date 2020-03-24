exports.up = function (knex) {
    return knex.schema.createTable('cars', cars => {
        cars.increments();
        cars
            .integer("VIN")
            .unique()
            .notNullable();

        cars
            .text("make")
            .notNullable();

        cars
            .text("model")
            .notNullable();

        cars
            .integer("mileage")
            .notNullable();

        cars
            .text("transmission");

        cars
            .text("title");

    });


};



exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};