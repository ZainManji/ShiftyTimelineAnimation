(function (context) {
    var ShiftyTimeline = function() {
	this.tweenableList = [];
    };

    ShiftyTimeline.prototype.addTweenable = function(domTweenable, pos) {
	// Add the tween object to the timeline at the position specified
    	domTweenable.startPos = pos;
	this.tweenableList.push(domTweenable);
    };

    ShiftyTimeline.prototype.setTimelineFrame = function(frame) {
	for (domTweenable in this.tweenableList) {
	    domTweenable.tweenable.set(frame - domTweenable.startPos);
    };

    var DomTweenable = function(domElement, tweenConfig) {
	var step = tweenConfig.step || function() {};
	tweenConfig.step = function(properties) {
	    Object.keys(properties).forEach(function (key) {
		domElement.style[key] = prop[key];
	    });
	    step.apply(this, arguments);
	};
	this.tweenable = new Tweenable(tweenConfig);
    };

    /*
     * @type {number}
     */
    DomTweenable.prototype.startPos;

})(window);

