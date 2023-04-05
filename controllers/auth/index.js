const sendSubscriptionEmail = require("./sendSubscriptionEmail");
const updateSubscription = require("./updateSubscription");
const register = require("./register");
const signin = require("./signin");
const current = require("./current");
const logout = require("./logout");
const update = require("./update");
const getUserInfo = require("./getUserInfo");
const { ctrlWrapper } = require("../../helpers");

const auth = {
  register: ctrlWrapper(register),
  signin: ctrlWrapper(signin),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  update: ctrlWrapper(update),
  getUserInfo: ctrlWrapper(getUserInfo),
  sendSubscriptionEmail: ctrlWrapper(sendSubscriptionEmail),
  updateSubscription: ctrlWrapper(updateSubscription),
};

module.exports = auth;
