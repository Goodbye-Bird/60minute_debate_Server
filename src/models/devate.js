export default (sequelize, DataTypes) => {
  const Devate = sequelize.define(
    "devate",
    {
      id: {
        field: "id",
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        field: "name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      room: {
        field: "room",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Devate",
      timestamps: false,
    }
  );
  return Devate;
};
