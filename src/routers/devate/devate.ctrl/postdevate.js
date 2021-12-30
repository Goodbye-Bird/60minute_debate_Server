import models from "../../../models";

export const postdevate = async (req, res) => {
  const { body } = req;
  if (!body.name || !body.room || !body.time) {
    return res.status(401).json({
      error: "입력되지 않았습니다",
    });
  }
  try {
    await models.Devate.create({
      name: body.name,
      room: body.room,
      time: body.time,
    });
    return res.status(200).json({
      message: "토론 만들기 성공",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류",
      status: 500,
    });
  }
};

export default postdevate;
