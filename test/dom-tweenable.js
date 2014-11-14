'use strict';
var assert = chai.assert;

describe('DomTweenable', function() {
  var stepBoolean = false;
  beforeEach(function () {
    stepBoolean = false;
    this.config = {
      from: {opacity: 0},
      to: {opacity: 1},
      duration: 1000,
      step: function (state) {}
    };
    this.configWithStep = {
      from: {opacity: 0},
      to: {opacity: 1},
      duration: 1000,
      step: function(state) {
        stepBoolean = true;
      }
    };
    this.el = document.createElement('div');
  });

  it('constructor', function() {
    var domTweenable = new DomTweenable(this.el, this.config);
    assert.equal(domTweenable.tweenConfig, this.config);
  });

  it('allow passing custom step function', function() {
    var domTweenable = new DomTweenable(this.el, this.configWithStep);
    domTweenable.seek(400);
    assert(stepBoolean, true);
  });
  
  it('update DOM node style', function() {
    var domTweenable = new DomTweenable(this.el, this.config);
    domTweenable.seek(200);
    assert.equal(this.el.style.opacity, 0.2);
  });

});
