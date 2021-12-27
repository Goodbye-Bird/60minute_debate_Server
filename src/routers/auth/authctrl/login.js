import models from "../../../models";

export const login = async (req, res) => {
  const { body } = req;
  try {
    if (!body.email || !body.password) {
      return res.status(400).json({
        error: "Email이나 비밀번호를 입력해주세요",
        status: 400,
      });
    }
    const hashpw = bcrypt.hashSync(password, 10);
    const user = await models.User.findOne({
      where: {
        emali: body.email,
        password: hashpw,
      },
    });
    if (!user) {
      return res.status(401).json({
        error: "Email이나 비밀번호를 입력해주세요",
        status: 401,
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    return res.status(200).json({
      message: "로그인 성공",
      status: 200,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 로그인 실패",
      status: 500,
    });
  }
};

export default login;
