const {BaseError} = require("sequelize")
const {ErrorByUser} = require("../errors")


// ERROR HANTERING FÖR ANVÄNDAREN
function errorHandler(error, req, res, next){
    if (error instanceof ErrorByUser) {
        res.status(400).json({
        error: error.message})}


    else if (error instanceof BaseError) {
        res.status(400).json({
        error: error.message})}

// ERROR HANTERING FÖR SERVERN
    else {
        res.status(500).json({error: "Internal Error"})
        console.log(error)}}

module.exports = errorHandler