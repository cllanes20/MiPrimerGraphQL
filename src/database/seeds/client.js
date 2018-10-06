
exports.seed= function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1, name: 'Cesar', age:44},
        {id: 2, name: 'Maria', age:25},
        {id: 3, name: 'Carmen', age:22}
      ]);
    });
}
