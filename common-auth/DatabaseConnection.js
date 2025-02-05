const databaseConnection = require("../../dbManagement/connect")("Octopuses Garden", process.env.URI_AUTH)

module.exports = databaseConnection