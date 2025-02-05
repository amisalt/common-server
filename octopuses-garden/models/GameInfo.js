const { Schema } = require("mongoose")
const connection = require("./DatabaseConnection")

const GameInfo = new Schema({
  xp:{type:Number, default:0},
  money:{type:Number, default:0},
  upgrades:[{type:String, ref:"Upgrade"}],
  upgradesClasses:[{type:String, ref:"Upgrade"}],
  banned:{type:Boolean, default:false},
  user:{type:String, required:true}
})

module.exports = connection.useDb("octopuses-garden").model("GameInfo", GameInfo)