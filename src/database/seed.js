const bcrypt = require("bcryptjs")
const User = require("../models/userModels")


// SKAPAR USERS I DATABASEN
const users = [
    {
        email: "stabbing.steve@fuskeluring.hack",
        password: "grillkorv123",
    },

    {
        email: "murdering.mike@fuskeluring.hack",
        password: "bananpaj1337",
    },

    {
        email: "crimes.johnsson@fuskeluring.hack",
        password: "sötsursås42",
    }
]


// KRYPTERAR LÖSENORDEN I DATABASEN
async function HashingFunc() {
    for(let user of users) {await User.create({email: user.email, password: bcrypt.hashSync(user.password, 10)})}}

HashingFunc()