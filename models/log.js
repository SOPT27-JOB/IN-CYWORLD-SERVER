module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Log', {
    type: {
      type: DataTypes.TINYINT(1), // 0 for landing page & 1 for result page
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};