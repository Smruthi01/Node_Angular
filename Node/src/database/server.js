const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host:"localhost",
   // host: "database-2.cbcdc338g1mp.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})(); 

module.exports = sequelize;


// DB_USER="admin"
// DB_PASS="Smru1421"