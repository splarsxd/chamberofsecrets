const db = require("../database/connection")
const faker = require("faker")
const {DataTypes} = require("sequelize")


const FalseProfile = db.define("FalseProfile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    picture: {
      type: DataTypes.BLOB,
      allowNull: false,
      unique: false
    }})



FalseProfile.Creator = () => {

    const FakeProfile = {}
    FakeProfile["name"] = faker.name.findName()
    FakeProfile["address"] = faker.address.streetAddress()
    FakeProfile["occupation"] = faker.name.jobTitle()
    FakeProfile["picture"] = faker.image.avatar()

    return FakeProfile
 }


module.exports = FalseProfile