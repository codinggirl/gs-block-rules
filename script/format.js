#!/usr/env/bin node

const fs = require('fs')
const path = require('path')

const files = [
    "blacklist/domain.txt",
    "blacklist/url.txt"
]

function main() {
    files.map(filePath => {
        const uri = path.resolve(__dirname, '../', filePath)
        if (fs.existsSync(uri)) {
            let data = fs.readFileSync(uri).toString()
            let items = data.split('\n').filter(v => v.trim() != '')
            let sortedItems = items.sort().filter((v, i, a) => a.indexOf(v) === i)

            fs.writeFileSync(uri, sortedItems.join('\n'))
        }
    })
}

main()
