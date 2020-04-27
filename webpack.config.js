module.exports = (env) => {
  return require(`./webpack/configs/${env}.js`)
}