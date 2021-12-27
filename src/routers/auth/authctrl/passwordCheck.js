export const passwordCheck = async (req, res) => {
  const { body } = req;
  if (!body.password || !body.password2) {
    return res.status(401).json({
      error: "비밀번호가 입력되지 않았습니다",
      status: 401,
    });
  }
  if (body.password !== body.password2) {
    return res.status(401).json({
      error: "암호를 다시 확인하세요",
      status: 401,
    });
  }
  try {
    const pwCheck =
      /^[a-zA-Z0-9!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]{6,15}$/;
    if (!pwCheck.test(body.password)) {
      return res.status(403).json({
        error: "비밀번호는 영문자,숫자,특수문자 조합을 입력해야 합니다",
        status: 403,
      });
    }
    return res.status(200).json({
      message: "올바른 비밀번호",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 비밀번호 형식 확인 불가",
      status: 500,
    });
  }
};

export default passwordCheck;
