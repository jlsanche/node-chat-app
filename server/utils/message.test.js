var expect = require('expect');
var {
  generateMessage
} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Juan';
    var text = 'Some message';
    var msg = generateMessage(from, text);

    expect(msg.createdAt).toBeA('number')

    expect(msg).toInclude({
      from,
      text
    })


  })
});