const fs = require('fs')

function stringArrayFromBuffer(buffer) {
    if (!buffer) {
        return []
    }
    return buffer.toString().split('\n').filter(v)
}

function unique(items) {
    return items.filter((v, i) => items.indexOf(v) === i)
}

function readFile(path) {
    if (!fs.existsSync(inFile)) {
        return null
    }
    let data = fs.readFileSync(inFile)
    return data
}

module.exports = {
    stringArrayFromBuffer,
    unique,
    readFile
}
