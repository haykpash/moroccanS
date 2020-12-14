const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post('/', async (req,res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "fields required"});
    if (password.length < 5) 
      return res
        .status(400)
        .json({ msg: "Passwoerd should be more then 5 characters"});
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
      const response = {
        //errors: false, 
        message: 'Email Sent',
        email: email,
        password: passwordHash,
      }
      console.log('Post Sent Email');
      res.json(response);
          // const salt = await bcrypt.genSalt();
          // const passwordHash = await bcrypt.hash(password, salt);
          // const newUser = new User({
          //   email,
          //   password: passwordHash,
          // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
