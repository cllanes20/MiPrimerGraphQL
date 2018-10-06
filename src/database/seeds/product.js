
exports.seed= function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {id: 1, name: 'IonBook', cant:5, text:"bla bla"},
        {id: 2, name: 'backbone', cant:70, text:"bla bla"},
        {id: 3, name: 'ngBook2', cant:10, text:"bla bla"}
      ]);
    });
}
