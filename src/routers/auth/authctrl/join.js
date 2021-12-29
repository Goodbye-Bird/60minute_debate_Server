import models from "../../../models";

export const join = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.name || !body.password || !body.password2) {
    console.log(req.body);
    console.log("error : 입력되지 않은 항목이 있습니다");
    return res.status(401).json({
      error: "입력되지 않은 항목이 있습니다.",
      status: 401,
    });
  }
  if (body.password !== body.password2) {
    console.log("비밀번호가 틀립니다");
    return res.status(403).json({
      error: "비밀번호가 틀렸습니다",
      status: 403,
    });
  }
  try {
    const data = {
      name: body.name,
      email: body.email,
      password: body.password,
    };

    await models.User.create({
      name: data.name,
      email: data.email,
      password: data.password,
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
