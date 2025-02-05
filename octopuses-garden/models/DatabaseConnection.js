const databaseConnection = require("../../dbManagement/connect")("Octopuses Garden", process.env.URI_OCTOPUSES_GARDEN)

module.exports = databaseConnection