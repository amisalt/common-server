const {Schema, model} = require("mongoose")
const connection = require("./DatabaseConnection")

const Upgrade = new Schema({
  name:{type:String, required:true, unique:true},
  cost:{type:Number, required:true}, 
  description:{type:String, required:true},
  upgrade:{type:Number, required:true}, //like it is description of an upgrade but in numbers
  quality:{type:String, required:true}, //quality to which this upgrade is applied
  device:{type:String, required:true},
  class:{type:String, required:true},
  classLevel:{type:Number, required:true},
})

module.exports = connection.useDb("octopuses-garden").model("Upgrade", Upgrade)