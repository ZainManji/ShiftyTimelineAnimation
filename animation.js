(function (exports) {
    var ShiftyTimeline = function(tweenConfig) {
	this.tweenableList = [];
	tweenConfig.duration = 0;
        tweenConfig.step = function(state, obj, frame) {
	    this._updateSubtweenables(frame);
	}
    	this.tweenConfig = tweenConfig;
	Tweenable.call(this, {}, tweenConfig);
    };

    ShiftyTimeline.prototype.addTweenable = function(domTweenable, pos) {
	// Add the tween object to the timeline at the position specified
    	
	this.tweenableList.push({tweenable : domTweenable, startPos : pos});
    	var tweenDuration = domTweenable.tweenConfig.duration + pos;
	if (tweenDuration > this.tweenConfig.duration) {
	    this.tweenConfig.duration = tweenDuration; 
	    this.setConfig(this.tweenConfig);
	}
    };

    ShiftyTimeline.prototype._updateSubtweenables = function(frame) {
	this.tweenableList.forEach(function(timelineObj) {
	    timelineObj.tweenable.seek(frame - timelineObj.startPos);
	});
    };

    var DomTweenable = function(domElement, tweenConfig) {
	var step = tweenConfig.step || function() {};
	tweenConfig.step = function(state) {
	    console.log(state);
	    Object.keys(state).forEach(function (key) {
		domElement.style[key] = state[key];
	    });
	    step.apply(this, arguments);
	};
	this.tweenConfig = tweenConfig;
	Tweenable.call(this, {}, tweenConfig);
    };

    ShiftyTimeline.prototype = Object.create(Tweenable.prototype, {
	constructor: {
            value: ShiftyTimeline,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    DomTweenable.prototype = Object.create(Tweenable.prototype, {
	constructor: {
     	    value: DomTweenable,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    exports.DomTweenable = DomTweenable;
    exports.ShiftyTimeline = ShiftyTimeline;
})(this);

