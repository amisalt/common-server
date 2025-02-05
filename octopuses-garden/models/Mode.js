const { Schema } = require("mongoose")
const connection = require("./DatabaseConnection")

const Mode = new Schema({
  value:{type:String, unique:true, default:"SINGLE"}
})

module.exports = connection.useDb("octopuses-garden").model("Mode", Mode)