module.exports = {

  client: 'postgres',
    connection: {
        host: '192.168.250.41',
        user: 'postgres',
        password: 'postgres',
        database: 'banpara_homologation',
      },
   pool: {
      min: 2,
      max: 10
   },
   migrations: {
      tableName: 'knex_migrations'
   }
};
