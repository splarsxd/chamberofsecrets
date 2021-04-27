const db = require("../database/connection")
const {Unauthorized} = require("../errors")
const {DataTypes} = require("sequelize")


// SÄTTER REGLER FÖR VÅRA VARIABLER
const User = db.define("user", {

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },


  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  }})



User.UserDef = (email) => {

  return new Promise((resolve, reject) => {
    const user = User.findOne({where: {email}})

    resolve(user)

    if (!user) {reject (new Unauthorized())}})}

module.exports = User