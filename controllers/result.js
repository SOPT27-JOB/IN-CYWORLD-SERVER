const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const { Result } = require('../models');
const result = {
  getResult: async (req, res) => {
    const levelNum = req.params.levelNum;
    try {
      // step이 몇번인지 알아낸 이후에,
      const results = await Result.findOne({
        where: {
          id: levelNum,
        }
      });
      return res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.SUCCESS, results));
    } catch (err) {
      console.error(err);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, resMessage.DB_ERROR));
    }
  }
};

module.exports = result;