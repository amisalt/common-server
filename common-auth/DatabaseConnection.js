const databaseConnection = require("../utils/databaseConnect")("Common Auth", process.env.URI_AUTH)

module.exports = databaseConnection