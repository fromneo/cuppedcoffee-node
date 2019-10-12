
exports.up = function(knex) {
  return knex.schema.createTable('beans', t => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('roaster').notNullable();
    t.string('type');
    t.timestamps(false, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('beans')
};
