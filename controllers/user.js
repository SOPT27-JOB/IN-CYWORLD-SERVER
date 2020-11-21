// const userModel = require('../models/user');
const resMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

const user = {
  createUser: async (req, res) => {
    data = {
      username: "유저이름",
      worklevel: 7,
      comment: "한마디",
    };
    return res
      .status(statusCode.OK)
      .send(util.success(statusCode.CREATED, resMessage.SUCCESS, data));
  },

  matchUser: async (req, res) => {
    data = {
      username: "유저이름",
      worklevel: 8,
      comment: "일이 너무 많아요 ㅜㅜ.",
    };
    return res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.SUCCESS, data));
  },
};

module.exports = user;
