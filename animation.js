(function (exports) {
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

    var ShiftyTimeline = function(tweenConfig) {
	this.tweenableList = [];
        var self = this;
	tweenConfig.step = function(state, obj, frame) {
	    self._updateSubtweenables(frame);
	}
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
	    var tweenFrame;
	    if (frame - timelineObj.startPos < 0) {
		tweenFrame = 0
	    } else if (frame > timelineObj.tweenable._duration + timelineObj.startPos) {
		tweenFrame = timelineObj.tweenable._duration + timelineObj.startPos;
	    } else {
		tweenFrame = frame - timelineObj.startPos;
 	    }

	    timelineObj.tweenable.tween().pause();
	    timelineObj.tweenable.seek(tweenFrame);
	});
    };

    exports.DomTweenable = DomTweenable;
    exports.ShiftyTimeline = ShiftyTimeline;
})(this);

