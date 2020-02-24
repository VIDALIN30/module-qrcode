const qrCode = require('qrcode')

let qrcode = {}

qrcode.getCodeBase64 = function (code, size){
    return qrCode.toDataURL(code, {version: 1, width: size || 100})
}

module.exports = qrcode