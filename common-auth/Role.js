const { Schema } = require("mongoose")
const connection = require("./DatabaseConnection")

const Role = new Schema({
  value:{type:String, unique:true, default:"USER"}
})

module.exports = connection.useDb("users-common").model("Role", Role)