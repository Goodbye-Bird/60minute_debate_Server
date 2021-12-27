import models from "../../../models";

export const join = async (req, res) => {
  const { body } = req;
  if (
    !body.email ||
    !body.name ||
    !body.password ||
    !body.password2 ||
    !body.grade ||
    !body.classNum
  ) {
    return res.status(401).json({
      error: "입력되지 않은 항목이 있습니다.",
      status: 401,
    });
  }
  const hashpw = bcrypt.hashSync(password, 10);
  try {
    const data = {
      name: body.name,
      email: body.email,
      password: hashpw,
      grade: body.grade,
      classNum: body.classNum,
    };

    await models.User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      grade: data.grade,
      classNum: data.classNum,
    });

    return res.status(200).json({
      message: "회원가입 성공!",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 회원가입 실패",
      status: 500,
      //alter table user drop column id;
      //alter table user add id int not null primary key auto_increment first;
    });
  }
};

export default join;
