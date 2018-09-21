var expect = require('expect');
var {
  generateMessage,
  generateLocationMessage
} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Juan';
    var text = 'Some message';
    var msg = generateMessage(from, text);

    expect(typeof msg.createdAt).toBe("number")

    expect(msg).toMatchObject({
      from,
      text
    })


  })
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Juan';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var msg = generateLocationMessage(from, latitude, longitude);

    expect(typeof msg.createdAt).toBe('number');

    expect(msg).toMatchObject({
      from,
      url
    });


  })
});