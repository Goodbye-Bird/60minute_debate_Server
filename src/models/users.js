export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      email: {
        field: "email",
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        field: "password",
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        field: "name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      grade: {
        field: "grade",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      classNum: {
        field: "classNum",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "User",
      timestamps: false,
    }
  );
  return User;
};
