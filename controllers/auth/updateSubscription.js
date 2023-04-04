const { User } = require('../../models/user');

const updateSubscription = async (req, res) => {
  const { subscribedToken } = req.params;
  const user = await User.findOne({ subscribedToken });

  await User.findByIdAndUpdate(
    user.id,
    { subscribed: true, subscribedToken: '' },
    { returnDocument: 'after', select: '-password -subscribedToken' }
  );

  res.json({ message: 'Verification successful' });
};

module.exports = updateSubscription;