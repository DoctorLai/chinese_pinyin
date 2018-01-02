var should = require('chai').should(),
    pinyin = require('../index');

describe('pinyin', function() {
  it('我 = wo', function() {
    pinyin("我").should.equal('wo');
  }); 
  it('我是中国人 = wo shi zhong guo ren', function() {
    pinyin("我是中国人").should.equal('wo shi zhong guo ren');
  }); 
  it('你好justyy = ni hao justyy', function() {
    pinyin("你好justyy").should.equal('ni hao justyy');
  }); 
});

