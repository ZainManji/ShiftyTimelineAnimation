var assert = chai.assert;

var test = "hello";

var config = {};
var testConfig = {
    from: {opacity:0},
    to: {opacity:1},
    duration: 1000,
    step: function (state) {
    	console.log(state);
    }
};

var testDomElement = document.createElement('div');

//var shiftyTimeline = new ShiftyTimeline(config);
//var domTweenable = new DomTweenable(testDomElement, testConfig);
//shiftyTimeline.addTweenable(domTweenable, 10);


// Test the ShiftyTimeline constructor
describe('timeline_constructor', function() {
    it('timeline_created', function() {
    	var shiftyTimeline = new ShiftyTimeline(config);
	assert.equal(shiftyTimeline.tweenConfig.duration, 0);
	assert.equal(shiftyTimeline.tweenableList.length, 0);
	
//	shiftyTimeline.set();
//	assert.equal(shiftyTimeline.get(), 0);
    });
});


// Test the DomTweenable constructor
describe('dom_tweenable_constructor', function() {
    it('domTweenable_created', function() {
	//var domTweenable = new DomTweenable(testDomElement, testConfig);

	var tweenable = new Tweenable({}, testConfig);
	tweenable.tween().pause();	
	tweenable.seek(300).pause();	
//console.log(tweenable.seek(20).pause()._currentState);	

    });
});



// Test the addTweenable function (check that object gets pushed in tweenableList)

// Test the _updateSubtweenables function (use get to verify the set number)

// Test calling set on the Timeline

//Test calling set on a DomTweenable object


