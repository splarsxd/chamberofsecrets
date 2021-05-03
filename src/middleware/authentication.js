const jwt = require("jsonwebtoken")


function auth(password, passwordresult) {
    if (passwordresult) {
        const token = jwt.sign(password, process.env.SECRET)
        return token
    }

    else {throw new Unauthorized()}
}


module.exports = auth