const User = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      //모델의 Attributes (Column)을 정의하는곳
      name: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
      },
      part: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
