require('babel-register')

const { configureWebpack } = require('@versal/config-helpers')

module.exports = configureWebpack('categories-gadget', {
  namespaceCss: false,
  externalizeCommonLibraries: false,
  generateVersalIframeHtml: true
})
