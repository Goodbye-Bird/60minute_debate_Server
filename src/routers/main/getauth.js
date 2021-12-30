import models from "../../models";
import { verifyToken, checkToken } from "../../middleware/authMiddleware.js";

export const getauth = async (req, res) => {
  const token = req.headers.token;

  try {
    const decoded = await checkToken(token);
    const user = await models.User.findOne({
      where: {
        id: decoded.id,
      },
    });
    if (!user) {
      return res.status(403).json({
        error: "조회하는 유저가 없습니다",
        status: 404,
      });
    }
    return res.status(200).json({
      message: "유저 정보 조회 성공!",
      status: 200,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 유저 정보 보내기 실패",
      status: 500,
    });
  }
};

export default getauth;
