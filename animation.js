(function (context) {
    var tweenTimeline = function() {
	this.tweenableList = [];
    };

    timeline.prototype.addTweenable = function(tween, pos) {
	// Add the tween object to the timeline at the position specified
    };

    timeline.prototype.setTimelineFrame = function(frame) {

    };

    var DomTweenable = function(domElement, tweenConfig) {
	var step = tweenConfig.step || function() {};
	tweenConfig.step = function(properties) {
	    Object.keys(properties).forEach(function (key) {
		domElement.style[key] = prop[key];
	    });
	    step.apply(this, arguments);
	};
	var tweenable = new Tweenable(tweenConfig);
    };
})(window);

