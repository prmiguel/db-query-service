import knex from "knex";

const clientConf = {
  client: "mssql",
};

const connectionConfig = {
  server: process.env.MSSQL_SERVER,
  password: process.env.MSSQL_PASSWORD,
  userName: process.env.MSSQL_USERNAME,
  database: "",
  port: +process.env.MSSQL_PORT,
  options: {
    trustedConnection: true,
  },
};

export const DBConnection = {
  Test: () => {
    return knex({
      ...clientConf,
      connection: {
        ...connectionConfig,
        database: "",
      },
    });
  },
};
