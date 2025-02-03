const databaseConnection = require("../../dbManagement/connect")("Octopuses Garden", process.env.URI)
module.exports = databaseConnection