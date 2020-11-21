const { User, Result } = require('../models');

const UserResult = (sequelize, DataTypes) => {
  return sequelize.define(
    'UserResult',
    {
      //모델의 Attributes (Column)을 정의하는곳
      ResultId: {
        type: DataTypes.INTEGER,
        reference: {
          model: Result,
          key: 'id',
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        reference: {
          model: User,
          key: 'id',
        },
      },
    },
    {
      freezeTableName: true,
      // 좋아요를 누른 시간을 기록하기 위해 사용
      timestamps: true,
    }
  );
};

module.exports = UserResult;