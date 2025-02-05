const Hashids = require('hashids/cjs')
const hashids = new Hashids(process.env.SECRET, 10, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-')

function encodeId(id){
  return hashids.encode(id)
}

function decodeId(encryption){
  return hashids.decode(encryption)
}

module.exports = {encodeId, decodeId}