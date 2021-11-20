const sgMail =require("@sendgrid/mail");
// const asyncHandler =require( "express-async-handler";
const asyncHandler =require( 'express-async-handler');
const jwt =require("jsonwebtoken");
const User =require("../Model/Auth");

// @desc    Get all user
// @route   Get /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

// @desc    Signup a new user
// @route   POST /api/users
// @access  Private
const signupUser = asyncHandler(async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  } else {
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );

    const emailData = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Account activation link",
      html: `
        <h1>Please use the following link to activate your account</h1>
        <p>${process.env.CLIENT_URL}/user/activate/${token}</p>
        <hr />
        <p>This email may contain sensetive information</p>
        <p>${process.env.CLIENT_URL}</p>
      `,
    };
    try {
      await sgMail.send(emailData);
      res.status(200).json({
        message: `Email has been sent to ${email}. Follow the instruction to activate your account`,
      });
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

// @desc    Activation a new user
// @route   POST /api/users/account-activation
// @access  Public

const activateUser = asyncHandler(async (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ACCOUNT_ACTIVATION,
      function (err, decoded) {
        if (err) {
          res.status(401);
          throw new Error("Expired link. Signup again");
        }

        const { name, email, password } = jwt.decode(token);

        const user = new User({ name, email, password });

        user.save((err, user) => {
          if (err) {
            res.status(401);
            throw new Error("Error saving user in database. Try signup again");
          }
          return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token,
          });
        });
      }
    );
  } else {
    res.status(400);
    throw new Error("Something went wrong. Try again");
  }
});

// @desc    Signin a user
// @route   POST /api/users/signin
// @access  Public
const signinUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.authenticate(password))) {
    // / Generate token and send to the client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get user profile
// @route   Get /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  // if (user) {
  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error("User not found");
  // }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user)
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
  //   expiresIn: "7d",
  // });

  // if (user) {
  //   user.name = req.body.name || user.name;
  //   user.email = req.body.email || user.email;
  //   user.password = req.body.password || user.password;

  //   const updatedUser = await User.save();

  //   res.json({
  //     _id: updatedUser._id,
  //     name: updatedUser.name,
  //     email: updatedUser.email,
  //     isAdmin: updatedUser.isAdmin,
  //     token
  //   });
  // } else {

  //   res.status(404);
  //   throw new Error("User not found");
  // }
});

module.exports = { signupUser, signinUser, activateUser, getUsers, updateUserProfile, getUserProfile };

