import models from "../../../models";

export const nameCheck = async (req, res) => {
  const { body } = req;
  try {
    if (body.name.length >= 8) {
      return res.status(403).json({
        error: "닉네임은 7자리 이하여야 합니다.",
        status: 403,
      });
    }

    const name = await models.User.findOne({
      where: {
        name: body.name,
      },
    });

    if (name) {
      return res.status(401).json({
        error: "이미 있는 닉네임입니다",
        status: 401,
      });
    }

    return res.status(200).json({
      message: "사용할 수 있는 닉네임입니다!",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 닉네임 중복 확인 불가",
      status: 500,
    });
  }
};

export default nameCheck;
