import { DataTypes, Sequelize } from "sequelize";

import Users from "./users";

const sequelize = new Sequelize("hackerton", "root", process.env.dbpw, {
  host: "localhost",
  dialect: "mysql",
  timezone: "+09:00",
  logging: false,
  define: {
    timestamps: false,
  },
});

export default {
  User: Users(sequelize, DataTypes),
};

sequelize
  .sync()
  .then((err) => {
    console.log("✅ Databases sync");
  })
  .catch((err) => {
    console.log(err.message);
  });