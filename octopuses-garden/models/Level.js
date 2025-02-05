const { Schema } = require('mongoose')
const connection = require("./DatabaseConnection")

const Level= new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  priceBonus:{type:Number, required:true},
  xpBonus:{type:Number, required:true},
  xpRequired:{type:Number, required:true}
})

module.exports = connection.useDb("octopuses-garden").model("Level", Level)