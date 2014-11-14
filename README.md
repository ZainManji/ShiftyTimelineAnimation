# ShiftyTimelineAnimation [![Build Status](https://secure.travis-ci.org/ZainManji/ShiftyTimelineAnimation.svg?branch=master)](http://travis-ci.org/ZainManji/ShiftyTimelineAnimation) [![Coverage Status](https://coveralls.io/repos/ZainManji/ShiftyTimelineAnimation/badge.png)](https://coveralls.io/r/ZainManji/ShiftyTimelineAnimation)

Lightweight Timeline and Dom Tweenable library on top of [Shifty](https://github.com/jeremyckahn/shifty).

## API

<h5>First create a DomTweenable instance. Pass in an DOM Element and a tween config to the constructor.</h5>

```javascript
var tweenConfig = {
      from: {opacity:0},
      to: {opacity:1},
      duration: 1000
    };
var element = document.getElementById('#header'); //Arbitrary DOM Element
var domTweenable = new DomTweenable(element, tweenConfig);
```

A DomTweenable object has the following functions available to it plus the default functions extended from
the Tweenable object from Shifty.js:

```javascript
// This function moves the state of the animation to a specific point in the tween's timeline.
// When the function moves the state, the CSS properties at that specific 
// point in the tween's timeline will be applied to the DOM Element
domTweenable.seek(frame);
```

<h5>Next create a Timeline instance in order to store your DomTweenable instances. Pass in a tween config to the constructor.</h5>

```javascript
var tweenConfig = {duration: 200}; //The timeline's tween duration will adjust to fit in all the DomTweenable objects, which will be stored. If you pass in an empty config, the duration will default to 500ms.
var timeline = new Timeline(tweenConfig);
```

A Timeline object has the following functions available to use:

```javascript
// This function adds a DomTweenable object to a ShiftyTimeline.
// domTweenableObject is an instance of a DomTweenable object, and startPos is at what start position you want
// to place the DomTweenable object on the ShiftyTimeline.
timeline.add(domTweenableObject, startPos);

// This function seeks the timeline to the frame number specified. For the DomTweenable objects which run
// through that frame number, there CSS style is updated according to the properties specified in their respective 
// tween config
// frame is a number which represents the millisecond to seek to.
timeline.seek(frame);
```


## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower (`npm install -g bower`).

From the repo root, install the project's development dependencies:

```
npm install
bower install
```

Testing relies on the Karma test-runner. If you'd like to use Karma to
automatically watch and re-run the test file during development, it's easiest
to globally install Karma and run it from the CLI.

```
npm install -g karma-cli
karma start
```

To run the tests in Firefox, just once, as CI would:

```
npm test
```


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
