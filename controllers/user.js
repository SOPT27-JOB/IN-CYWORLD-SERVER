// const userModel = require('../models/user');
const resMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const calculateScore = require("../modules/calculateScore");
const getResultId = require("../modules/getResultId");
const {User, Result} = require('../models');

const user = {
  /**
   * 점수값을 계산해 user row 생성
   * @summary user 생성
   * @param name, birthYear, answers
   * @return 새로 생성된 user
  */
  createUser: async (req, res, next) => {
    const {birthYear,answers} = req.body;
    if(birthYear === undefined || answers === undefined){
      return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }
    
    const score = calculateScore(answers);
    const resultId = getResultId(score);
    
    try{
      const result = await Result.findOne({where:{id:resultId}});
      const newUser = await User.create({
        birthYear:birthYear,
        score:score
      });

      await result.addUser(newUser);
      
      req.user = newUser;
      
      next();

    } catch(err){
      console.log(err);
      return res.status(statusCode.INTERNAL_SERVER_ERROR)
        .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resMessage.DB_ERROR));
    }
    
  },

  merong:(req,res)=>{
    console.log(req.user);
    return res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.SUCCESS, req.user));
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
