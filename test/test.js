var assert = chai.assert;

var test = "hello";

var config = {duration: 10};
var testConfig = {
    from: {opacity:0},
    to: {opacity:1},
    duration: 1000,
    step: function (state) {
    	//console.log(state);
    }
};

var testDomElement = document.createElement('div');

// Test the ShiftyTimeline constructor
describe('timeline_constructor', function() {
    it('timeline_created', function() {
	var shiftyTimeline = new ShiftyTimeline(config);
	assert.equal(shiftyTimeline._duration, 10);
	assert.equal(shiftyTimeline.tweenableList.length, 0);
	
    });
});


// Test the ShiftyTimeline addTweenable function
describe('addTweenable_function', function() {
    it('addedTweenable', function() {
	var shiftyTimeline = new ShiftyTimeline(config);
	var domTweenable = new DomTweenable(testDomElement, testConfig);
       	assert.equal(shiftyTimeline._duration, 10);
	assert.equal(shiftyTimeline.tweenableList.length, 0);	
	console.log(shiftyTimeline.addTweenable);
	shiftyTimeline.addTweenable(domTweenable, 200);	
    	
	//assert.equal(shiftyTimeline.tweenableList.length, 1);
	//assert.equal(shiftyTimeline.duration, 1200);
	//assert.equal(shiftyTimeline.tweenableList[0].startPos, 200);	


    });

});



//Test the ShiftyTimeline updateSubTweenables Function
describe('updateSubTweenables_function', function() {
    it('updateSubtweenables', function() {
	var shiftyTimeline = new ShiftyTimeline(config);
        var domTweenable = new DomTweenable(testDomElement, testConfig);
	//shiftyTimeline.addTweenable(domTweenable, 200);
	//shiftyTimeline.seek(300).pause();;
	//assert.equal(testDomElement.style.opacity, 0.1);



    });

});

// Test the DomTweenable constructor
describe('dom_tweenable_constructor', function() {
    it('domTweenable_created', function() {
	var domTweenable = new DomTweenable(testDomElement, testConfig);

	var tweenable = new Tweenable({}, testConfig);
	tweenable.tween().pause();	
	tweenable.seek(450).pause();	

    });
});


