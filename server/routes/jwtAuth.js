const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

//* Register Route
router.post("/register", validInfo, async (req, res) => {
  try {

    // Destructure request body
    const { 
      firstName,
      lastName,
      email,
      username,
      password,
      rePassword
    } = req.body;

    // Check if username already exists in DB
    const user = await User.findAll({
      where: {
        username: username
      }
    })

    if (user.length > 0) {
      return res.status(401).json("User already exists");
    }

    // Bcrypt the password and re-typed password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt)

    // const [p1, p2] = await Promise.all([
    //   bcrypt.hash(password, salt),
    //   bcrypt.hash(rePassword, salt)
    // ]);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      username,
      bcryptPassword
    });

    // res.json(newUser)

    // Generate JWT token

    // const token = jwtGenerator(newUser.)


  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;