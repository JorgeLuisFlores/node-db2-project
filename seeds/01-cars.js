exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([{
          VIN: 1234,
          make: 'Toyota',
          model: 'Highlander',
          mileage: 30000,
          transmission: 'Automatic',
          title: 'Clean'

        },
        {
          VIN: 12345,
          make: 'BMW',
          model: 'i6',
          mileage: 7000,
          transmission: 'Automatic',
          title: 'Salvage'

        },
        {
          VIN: 123456,
          make: 'Tesla',
          model: 'Model S',
          mileage: 0,
          transmission: 'Automatic',
          title: 'Clean'

        }
      ]);
    });
};