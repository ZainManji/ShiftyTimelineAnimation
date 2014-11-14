# ShiftyTimelineAnimation [![Build Status](https://secure.travis-ci.org/ZainManji/ShiftyTimelineAnimation.svg?branch=master)](http://travis-ci.org/ZainManji/ShiftyTimelineAnimation) [![Coverage Status](https://coveralls.io/repos/ZainManji/ShiftyTimelineAnimation/badge.png)](https://coveralls.io/r/ZainManji/ShiftyTimelineAnimation)

Lightweight Timeline and Dom Tweenable library on top of [Shifty](https://github.com/jeremyckahn/shifty).

## Example Usage
```javascript
// Create a tween config
var tweenConfig = {
      from: {opacity:0},
      to: {opacity:1},
      duration: 1000
    };
    
// Create a DomTweenable object so that when tweening, the css properties from the tween config
// get applied to the attached DOM Element.
var element = document.getElementById('#header'); //Arbitrary DOM Element
var domTweenable = new DomTweenable(element, tweenConfig);

// Move the state of the animation to the 400ms point in the tween's timeline. The CSS properties at this
// moment get applied to the DOM Element
domTweenable.seek(400);

// Create a Tweenable Timeline to store and tween amongst 1 or more DomTweenables
var timelineConfig = {duration: 200}; //arbitary duration
var timeline = new Timeline(timelineConfig);

// Add the DomTweenable to the timeline at the 300ms position.
timeline.add(domTweenable, 300);

// Move the pointer on the timeline to the 400ms position and update the DomTweenable objects state.
// In this example, the DomTweenable object's state will be moved to the 100ms mark and the CSS
// properties in the DomTweenable's tween will be applied to the element. (400ms - 300ms = 100ms)
timeline.seek(400);

```

## API

Both the DomTweenable object and the Timeline object extend from Shifty's Tweenable.
[Shifty's API](http://jeremyckahn.github.io/shifty/dist/doc/classes/Tweenable.html)

#### DomTweenable(DOMElement, config)
Constructor for a DomTweenable object.
Takes as param a DOM Element and a tween config.

#### DomTweenable.seek(millisecond)
Move the state of the animation to a specific point in the DomTweenable tween's timeline. The CSS properties
at the specified point will be applied to the DomElement.

#### Timeline(config)
Constructor for a Timeline object.
Takes as param a config (optional). 

#### Timeline.add(DomTweenable, millisecond)
Add a DomTweenable object to the Timeline at a specific point in the Timeline. The DomTweenable tween will
start at the specified position

#### Timeline.seek(millisecond)
Move the current state to a specific point in the Timeline tween's timeline. For each DomTweenable intersecting
at the point, apply the CSS properties in the DomTweenable's tween to it's respective DOM element.

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
