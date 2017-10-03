const expect = require('chai').expect;
const rot13 = require("../rot13.js");

describe('rot13 test', function() {
  it('function should retun undefined if no string is passes', function() {
    expect(rot13.encode()).to.equal(undefined);
  });
  it('function should return "not a string" if anything other than string is passed', function() {
    expect(rot13.encode(13)).to.equal('not a string');
  });
  it('function should return "n" if "a" is entered', function() {
    expect(rot13.encode('a')).to.equal('n');
  });
  it('function should return "a" if "n" is entered', function() {
    expect(rot13.encode('n')).to.equal('a');
  });
  it('function should return encoded string', function() {
    expect(rot13.encode('hello world')).to.equal('uryyb jbeyq')
  });
});
