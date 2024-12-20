const { loginUserService } = require("../services/authService");
const catchAsync = require("../utils/catchAsync");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token, hasBitacora } = await loginUserService(
      email,
      password
    );

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
      hasBitacora,
    });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

module.exports = { login: catchAsync(login) };
