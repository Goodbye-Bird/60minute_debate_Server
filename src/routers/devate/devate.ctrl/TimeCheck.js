import models from "../../../models";

export const timeCheck = async (req, res) => {
  const time = req.params.time;
  try {
    console.log(time);
    const isvalid = true;
    const times = await models.Devate.findOne({
      time,
    });
    if (times) {
      isvalid = false;
    }
    return res.status(200).json({
      message: "사용할 수 있는 시간대입니다",
      status: 200,
      isvalid,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "서버 오류로 인한 시간 중복 확인 실패",
      status: 500,
    });
  }
};

export default timeCheck;
