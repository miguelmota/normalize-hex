const test = require('tape')
const normalizeHex = require('../')

test('normalizeHex', t => {
  t.plan(15)

  t.equal(normalizeHex(), '')
  t.equal(normalizeHex(null), '')
  t.equal(normalizeHex(''), '')
  t.equal(normalizeHex(1), '1')
  t.equal(normalizeHex({}), '')
  t.equal(normalizeHex('0'), '0')
  t.equal(normalizeHex('1'), '1')
  t.equal(normalizeHex('1', { evenLength: true }), '01')
  t.equal(normalizeHex('1', { addPrefix: true }), '0x1')
  t.equal(normalizeHex('1', { evenLength: true, addPrefix: true }), '0x01')
  t.equal(normalizeHex(Buffer.from('01', 'hex')), '01')
  t.equal(normalizeHex('abc'), 'abc')
  t.equal(normalizeHex('abc', { evenLength: true }), '0abc')
  t.equal(normalizeHex('abc', { addPrefix: true }), '0xabc')
  t.equal(normalizeHex('abc', { evenLength: true, addPrefix: true }), '0x0abc')
})
