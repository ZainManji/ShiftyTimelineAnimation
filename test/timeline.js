'use strict';
var assert = chai.assert;

describe('Timeline', function () {
  beforeEach(function () {
    this.el = document.createElement('div');
    this.config = {duration:10};
    this.tweenableConfig = {
      from: {opacity:0},
      to: {opacity:1},
      duration: 1000
    };
    this.newConfig = {
      from: {opacity:1},
      to: {opacity:0},
      duration: 700,
    };
  });

  describe('constructor', function () {
    it('setup default values', function() {
      var tl = new Timeline(this.config);
      assert.equal(tl._duration, 10);
      assert.equal(tl.tweenableList.length, 0);
    });
  });

  describe('#add()', function () {
    it('add Tweenable', function() {
      var tl = new Timeline(this.config);
      var domTweenable = new DomTweenable(this.el, this.tweenableConfig);
      assert.equal(tl._duration, 10);
      assert.equal(tl.tweenableList.length, 0);
      tl.add(domTweenable, 200);

      assert.equal(tl.tweenableList.length, 1);
      assert.equal(tl._duration, 1200);
      assert.equal(tl.tweenableList[0].delay, 200);

      var newDomTweenable = new DomTweenable(this.el, this.newConfig);
      tl.add(newDomTweenable, 300);
      assert.equal(tl.tweenableList.length, 2);
      assert.equal(tl._duration, 1200);
      assert.equal(tl.tweenableList[1].delay, 300);
    });
  });

  describe('#seek()', function () {
    it('update sub tweenable', function () {
      var tl = new Timeline(this.config);
      var domTweenable = new DomTweenable(this.el, this.tweenableConfig);
      tl.add(domTweenable, 200);
      tl.seek(100);
      assert.equal(this.el.style.opacity, 0);
      tl.seek(300).pause();
      assert.equal(this.el.style.opacity, 0.1);
      tl.seek(600);
      assert.equal(this.el.style.opacity, 0.4);
      tl.seek(2400);
      assert.equal(this.el.style.opacity, 1); 
    });
  });
});
