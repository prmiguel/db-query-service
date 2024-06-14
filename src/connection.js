const knex = require("knex");

const clientConf = {
  client: "pg",
};

// const connectionConfig = {
//   connectionString: process.env.DATABASE_URL,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
// };

module.exports = DBConnection = {
  HR: () => {
    return knex({
      ...clientConf,
      connection: process.env.DATABASE_URL,
    });
  },
};
