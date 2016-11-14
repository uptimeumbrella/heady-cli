#! /usr/bin/env node

const meow = require('meow')
const shtml = require('shtml')
const heady = require('heady')
const isBlank = require('is-blank')

const cli = meow(shtml`
  <div>
    <underline>Usage</underline>
    $ heady [url]<br><br>
    <underline>Options</underline>
    -h, --help - Get help menu
    -v, --version - Get the version<br><br>
    <underline>Examples</underline>
    $ heady -h
    $ heady johnotander.com
  </div>
`, {
  alias: {
    v: 'version',
    h: 'help'
  }
})

const url = cli.input[0]

if (isBlank(url)) {
  console.error('heady expected a url')
  process.exit(1)
}

heady(url)
  .then(console.log)
