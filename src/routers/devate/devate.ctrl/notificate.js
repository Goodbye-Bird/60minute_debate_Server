import models from "../../../models/index.js";

export const notificate = async (req, res) => {
  try {
    const devates = await models.Devate.findAll();
    if (devates === undefined) {
      res.status(400).json({
        error: "진행할 토론이 없습니다",
        status: 400,
      });
    }
    return res.status(200).json({
      message: "토론을 불러오기에 성공했습니다!",
      status: 200,
      devates,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 토론 찾기 실패",
      status: 500,
    });
  }
};

export default notificate;
