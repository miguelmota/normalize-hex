function normalizeHex (hex, opts) {
  opts = {
    evenLength: false,
    addPrefix: false,
    ...opts
  }

  let result = null
  let value = ''

  if (Buffer.isBuffer(hex)) {
    hex = hex.toString('hex')
  }

  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex === 'string') {
    value = hex.toLowerCase()
  }

  if (value.startsWith('0x')) {
    value = value.slice(2)
  }

  const data = (value.length % 2) ? `0${value}` : value
  if (Buffer.from(data, 'hex')) {
    result = opts.evenLength ? data : value
  }

  if (typeof result === 'string' && opts.addPrefix) {
    result = `0x${result}`
  }

  return result
}

module.exports = normalizeHex
