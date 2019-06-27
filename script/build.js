#!/usr/env/bin node

const fs = require('fs')
const path = require('path')

const files = [
    "blacklist/domain.txt",
    "blacklist/url.txt"
]

function main() {
    files.map(filePath => {
        const inPath = path.resolve(__dirname, '../', filePath)
        if (fs.existsSync(inPath)) {
            let data = fs.readFileSync(inPath).toString()
            let items = data.split('\n').filter(v => v.trim() != '')
            let sortedItems = items.filter((v, i, a) => a.indexOf(v) === i).sort()
            sortedItems = sortedItems.map(v => {
                let i = v.indexOf(' #')
                if (i >= 0) {
                    return v.substring(0, i)
                } else {
                    return v
                }
            }).filter(v => !v.startsWith('#'))
            let outDir = path.resolve(__dirname, '../dist')
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir)
            }
            let outPath = path.resolve(__dirname, '../dist', path.basename(inPath))
            fs.writeFileSync(outPath, sortedItems.join('\n'))
        }
    })
}

main()
