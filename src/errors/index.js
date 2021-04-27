class ErrorByUser extends Error{}


// ERRORS HELT ENKELT
class InvalidBody extends ErrorByUser {
    constructor(){
        super()
        this.message = "Invalid body, please enter email & password."
        this.errorCode = 400
    }
}


class Invalidity extends ErrorByUser {
    constructor() {
      super()
      this.message = "Authentication incomplete."
      this.status = 403
    }
}


class Unauthorized extends ErrorByUser {
    constructor() {
        super()
        this.message = "Unauthorised."
        this.errorCode = 401
    }
}



module.exports = {
    ErrorByUser,
    InvalidBody,
    Unauthorized,
    Invalidity}