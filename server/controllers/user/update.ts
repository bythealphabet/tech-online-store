import errorHandler from "../../helpers/dbErrorHandler";
import extend from "lodash/extend";

export const update = async (req, res) => {
  console.log("req.body", req.body);
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    console.log("user", user);
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
