const { TwingEnvironment, TwingLoaderFilesystem } = require('twing')
const loader = new TwingLoaderFilesystem()
// Currently breaks since `TwingLoaderFilesystem` is resolved to `TwingLoaderNull`.
// loader.addPath('components', 'components')
let TwingExport = new TwingEnvironment(loader)

module.exports = TwingExport
