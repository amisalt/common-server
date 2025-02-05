const { Schema } = require("mongoose")
const connection = require("./DatabaseConnection")

const User = new Schema({
  username:{type:String, unique:true, required:true},
  password:{type:String, required:true},
  roles:[{type:String, ref:"Role"}],
  refreshToken:{type:String, default:""}
})

module.exports = connection.useDb("users-common").model("User", User)