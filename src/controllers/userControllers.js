const {Unauthorized} = require("../errors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModels")
const FalseProfile = require("../models/fakeModels")
const auth = require("../middleware/authentication")


// LOGIN METOD + KRYPTERING
module.exports = {
  async login(req, res, next) {
    try {
      const {email, password} = req.body
      const user = await User.UserDef(email)
      const passwordresult = bcrypt.compareSync(password, user.password)
      res.json(auth(password, passwordresult))
    }
      catch (error) {next(error)}},


// INFORMATION AV ANVÄNDAREN
  async info(req, res, next) {
    const {email, password} = req.body
    res.json({email, password})
  },


// GENERATE FALSKA PROFILER
  async generate(req, res, next) {
    try {
      const {token} = req.body
      jwt.verify(token, process.env.SECRET)

      const FakeProfile = FalseProfile.Creator()
      res.json(FakeProfile)}

    catch (error) {next(error)}},


// ÅTERSTÄLLNING AV LÖSENROD
  async resetpassword(req, res, next) { 
    try{
      const {email, password} = req.body
      if (!email || !password) {throw new Unauthorized()}

      const newpass = bcrypt.hashSync(password)
      await User.update({password: newpass},{where: {email: email}})

      res.json({message: "Password reset success!"})}

    catch (error) {next(error)}}}