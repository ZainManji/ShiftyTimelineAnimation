(function (exports) {
  'use strict';

  /**
   * DomTweenable is Tweenable object applying the style property to a DOM node.
   * @param {Element} domElement  HTMLElement or SVGElement
   * @param {Object} tweenConfig Tween configuration as per Shifty
   */
  var DomTweenable = exports.DomTweenable = function(domElement, tweenConfig) {
    var step = tweenConfig.step || function() {};
    tweenConfig.step = function(state) {
      Object.keys(state).forEach(function (key) {
        domElement.style[key] = state[key];
      });
      step.apply(this, arguments);
    };
    this.tweenConfig = tweenConfig;
    Tweenable.call(this, {}, tweenConfig);
  };

  DomTweenable.prototype = Object.create(Tweenable.prototype, {
    constructor: {
      value: DomTweenable,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  /**
   * Timeline is Tweenable instance able to contains sub tweens who'll
   * start at a specified delay.
   * @param {Object} tweenConfig Tween configuration as per Shifty
   */
  var Timeline = exports.Timeline = function(tweenConfig) {
    this.tweenableList = [];
    this.tweenConfig = tweenConfig || {};
    tweenConfig.step = function(state, obj, frame) {
      this._updateSubtweenables(frame);
    }.bind(this);
    Tweenable.call(this, {}, tweenConfig);
  };

  Timeline.prototype = Object.create(Tweenable.prototype, {
    constructor: {
      value: Timeline,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  /**
   * Register a sub tween on the timeline
   * @param {Tweenable} tweenable A Tweenable instance
   * @param {Number} delay        Delay after which the tween should start
   */
  Timeline.prototype.add = function(tweenable, delay) {
    delay = delay || 0;

    this.tweenableList.push({ tweenable: tweenable, delay: delay });

    var tweenDuration = tweenable.tweenConfig.duration + delay;
    if (tweenDuration > this.tweenConfig.duration) {
      this.tweenConfig.duration = tweenDuration;
      this.setConfig(this.tweenConfig);
    }
  };

  Timeline.prototype._updateSubtweenables = function(frame) {
    this.tweenableList.forEach(function(timelineObj) {
      timelineObj.tweenable.seek(frame - timelineObj.delay);
    });
  };
})(this);
