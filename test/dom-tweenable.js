'use strict';
var assert = chai.assert;

describe('DomTweenable', function() {
  beforeEach(function () {
    this.config = {
      from: {opacity: 0},
      to: {opacity: 1},
      duration: 1000,
      step: function (state) {}
    };
    this.el = document.createElement('div');
  });

  it('extend a Tweenable', function() {
    var domTweenable = new DomTweenable(this.el, this.config);
    domTweenable.tween().pause();
    //domTweenable.seek(250);
    //assert.equal(testDomElement.style.opacity, 0.25);
  });

  it('allow passing custom step function');
  it('it update DOM node style');
});
