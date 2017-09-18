# phenomic-plugin-transform-asciidoc

Uses [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js) to
transform `ad`, `adoc`, and `asciidoc` files from Asciidoc to Html.

## Installation

1. Add to [Phenomic](https://www.phenomic.io) 1.0 project using npm.

       npm i --save phenomic-plugin-transform-asciidoc

2. Register the plugin in `package.json`

       "phenomic": {
         "plugins": [
           "phenomic-plugin-transform-asciidoc",
           ...

## Features

- [x] Supports [Phenomic](https://www.phenomic.io) 1.0
- [x] Converts Asciidoc files to Html using [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js)
- [x] Highlights code samples using [Lowlight](https://github.com/wooorm/lowlight)

## Contribute

PRs accepted. :beer:

## License

[BSD-3-Clause © Ezra Lalonde](LICENSE)

