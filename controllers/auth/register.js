const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email is already in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
        name: newUser.name,
        avatarURL: newUser.avatarURL,
    });
};

module.exports = {
    register: ctrlWrapper(register),
};