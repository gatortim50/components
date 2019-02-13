#!/usr/bin/env node
const changeCase = require('change-case')

const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname, 'svgIcons')
const files = fs.readdirSync(dir)

files.forEach(file => {
  if (file.indexOf('.svg') !== -1) {
    const filePath = path.join(dir, file).split('/')
    const filename = filePath.pop().split('.')
    const extension = filename.pop()
    const newFilename = changeCase.snakeCase(filename[0])
    const newFilePath = `${filePath.join('/')}/${newFilename}.${extension}`
    fs.renameSync(path.join(dir, file), newFilePath)
  }
})
