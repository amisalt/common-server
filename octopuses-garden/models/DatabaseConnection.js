const databaseConnection = require("../../utils/databaseConnect")("Octopuses Garden", process.env.URI_OCTOPUSES_GARDEN)

module.exports = databaseConnection