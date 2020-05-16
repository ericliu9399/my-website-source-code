const path = require("path");
const PATH = require("./configPath")

module.exports = {
  bundle: path.resolve(PATH.src, "index.js"),
  supportIE: path.resolve(PATH.src, "supportIE.js"),
}