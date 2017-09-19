# phenomic-plugin-transform-asciidoc

Uses [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js) to
transform [Phenomic](https://www.phenomic.io) content—Asciidoc in, Html out.

## Installation

1. Add to [Phenomic](https://www.phenomic.io 1.0) project using npm.

       npm i --save phenomic-plugin-transform-asciidoc

2. Register the plugin in `package.json`

       "phenomic": {
         "plugins": [
           "phenomic-plugin-transform-asciidoc",
           ...

## Features

- [x] Works with [Phenomic](https://www.phenomic.io 1.0)
- [x] Converts Asciidoc files to Html using [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js)
- [x] Highlights code samples using [Lowlight](https://github.com/wooorm/lowlight)
- [x] Supports `ad`, `adoc`, and `asciidoc` file extensions
- [x] Available on [npm](https://www.npmjs.com/package/phenomic-plugin-transform-asciidoc) and [github](https://github.com/ezralalonde/phenomic-plugin-transform-asciidoc)

## Contribute

Pull requests welcome. :beer:

## License

[BSD-3-Clause © Ezra Lalonde](LICENSE)

