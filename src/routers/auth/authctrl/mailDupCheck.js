import models from "../../../models/index.js";

export const mailDupCheck = async (req, res) => {
  const { body } = req;
  try {
    const email = await models.User.findOne({
      where: {
        email: body.email,
      },
    });
    if (email) {
      return res.status(401).json({
        error: "이미 있는 Email입니다",
        status: 401,
      });
    }
    return res.status(200).json({
      message: "사용할 수 있는 Email입니다",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 Email 중복 확인 불가",
    });
  }
};

export default mailDupCheck;
