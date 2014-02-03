
var ScreenBuffer = require('../')
var assert = require('assert')

describe('ScreenBuffer', function() {

  describe('with some data', function() {

    var buffer

    beforeEach(function() {
      buffer = new ScreenBuffer()
      buffer.update(0, [[0, '1'], [50, '2']])
      buffer.update(1, [[100, 'x']])
    })

    it('getCell should return the cell', function() {
      assert.equal(buffer.getCell(0, 1)[0], 50)
      assert.equal(buffer.getCell(0, 1)[1], '2')
    })

    it('getCell should return empty cell for nonexistant cell', function() {
      assert.equal(buffer.getCell(5, 5), ScreenBuffer.EMPTY_CELL)
    })

    it('getRows should return number of rows', function() {
      assert.equal(buffer.getRows(), 2)
      assert.equal(buffer.getCols(0), 2)
      assert.equal(buffer.getCols(1), 1)
    })
    
    it('getCols should return number of columns in a row', function() {
      assert.equal(buffer.getCols(0), 2)
      assert.equal(buffer.getCols(1), 1)
    })

    it('toString should return the string representation', function() {
      assert.equal(buffer.toString(), '12\nx')
    })

    it('setCell should update the cell', function() {
      assert.equal(buffer.getCell(0, 1)[0], 50)
      assert.equal(buffer.getCell(0, 1)[1], '2')
    })

    it('resize should resize the buffer', function() {
      buffer.resize(3, 7)
      assert.equal(buffer.toString(), '12     \nx      \n       ')
    })

    it('clone should create a new buffer', function() {
      var clone = buffer.clone()
      buffer.setCell(0, 0, [0, 'Z'])
      assert.equal(buffer.toString(), 'Z2\nx')
      assert.equal(clone.toString(), '12\nx')
    })

    it('getRow should return the row', function() {
      var row = buffer.getRow(0)
      assert.deepEqual(row, [[0, '1'], [50, '2']])
    })

    it('update should replace the row', function() {
      buffer.update(0, [[0, 'Z']])
      var row = buffer.getRow(0)
      assert.deepEqual(row, [[0, 'Z']])
    })

  })
  
})




