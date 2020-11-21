// const userModel = require('../models/user');
const resMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const calculateStep = require("../modules/calculateStep");
const {User, UserResult} = require('../models');

const user = {
  /**
   * 점수값을 계산해 user row 생성
   * @summary user 생성
   * @param name, part
   * @return 새로 생성된 user
  */
  createUser: async (req, res) => {
    // TODO : 유저정보 변동 가능.
    const {name,part,answers} = req.body;
    if(name === undefined || part === undefined || answers === undefined){
      return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }
    const step = calculateStep(answers);
    try{
      const newUser = await User.create({
        name:name,
        part:part,
      });

      console.log(newUser.id);console.log(newUser.id);console.log(newUser.id);

      return res.status(statusCode.OK)
        .send(util.success(statusCode.CREATED, resMessage.SUCCESS, newUser));
    } catch(err){
      console.log(err);
      throw err;
    }
    
  },
  /**
   * QNA게시판 내 QNA 상세조회
   * @summary QNA게시판 특정 idx 상세조회
   * @param 게시물 idx
   * @return idx에 대한 QNA
  */
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
