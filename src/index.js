import deburr from "lodash.deburr"
import kebabCase from "lodash.kebabcase"

import AD from "asciidoctor.js"
import cheerio from "cheerio"
import low from "lowlight"
import rehype from "rehype"

const debug = require("debug")("phenomic-plugin-transform-asciidoc")

// markup code snippets manually
function fixCodeSnippets(html) {
  var $ = cheerio.load(html)
  $("pre.highlight code").map((ii, ee) => {
    var language = $(ee).data("lang")
    var code = $(ee).text()
    var ast = low.highlight(language, code).value
    var out = rehype().stringify({ type: "root", children: ast })
    $(ee)
      .contents()
      .replaceWith(out)
  })
  return $.html()
}

function getDescription(html) {
  var $ = cheerio.load(html)
  if ($("#description")) {
    return $("#description")
      .children()
      .text()
  }
  return null
}

const defaultOptions = {
  safe: "server",
  attributes: {
    "linkcss!": "",
    "copycss!": ""
  }
}

function htmlify(text) {
  var asciidoctor = AD()
  var result = asciidoctor.convert(text, defaultOptions)
  result = fixCodeSnippets(result)
  return result
}

function processAsciidoc(text) {
  var asciidoctor = AD()
  var doc = asciidoctor.load(text, defaultOptions)
  var data = {
    ...doc.attributes.$$smap,
    body: htmlify(text)
  }
  data.date = new Date(
    (doc.getAttribute("date") ||
      doc.getAttribute("revdate") ||
      doc.getAttribute("docdate")
    ).replace(/-/g, "/")
  )
  data.title = doc.getAttribute("doctitle")
  data.layout = doc.getAttribute("layout")
  data.description = getDescription(data.body)
  data.showdate = doc.getAttribute("nodate", true)
  data.tags = doc
    .getAttribute("tags", "")
    .split(",")
    .map(tag => kebabCase(deburr(tag)))
  return data
}

function transformAsciidocFile({
  config,
  file,
  contents
}: {
  config?: PhenomicConfig,
  file: PhenomicContentFile,
  contents: Buffer
}) {
  console.log(PhenomicConfig)
  debug(`transforming ${file.fullpath}`)
  const data = processAsciidoc(contents.toString())
  return {
    data
  }
}

export default function(): PhenomicPlugin {
  return {
    name: "phenomic-plugin-transform-asciidoc",
    supportedFileTypes: ["ad", "adoc", "asciidoc"],
    transform: transformAsciidocFile
  }
}
