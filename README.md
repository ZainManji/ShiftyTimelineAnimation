# ShiftyTimelineAnimation [![Build Status](https://secure.travis-ci.org/ZainManji/ShiftyTimelineAnimation.svg?branch=master)](http://travis-ci.org/ZainManji/ShiftyTimelineAnimation) [![Coverage Status](https://coveralls.io/repos/ZainManji/ShiftyTimelineAnimation/badge.png)](https://coveralls.io/r/ZainManji/ShiftyTimelineAnimation)

Lightweight Timeline and Dom Tweenable library on top of [Shifty](https://github.com/jeremyckahn/shifty).

## Documentation

Both the DomTweenable object and the Timeline object extend from Shifty's Tweenable.
[Shifty's API](http://jeremyckahn.github.io/shifty/dist/doc/classes/Tweenable.html)

#### DomTweenable(DOMElement, config)
Constructor for a DomTweenable object.<br>
Takes as param a DOM Element and a tween config.
```javascript
// When tweening, the css properties from the tween config get applied to the attached DOM Element.
var domTweenable = new DomTweenable(
                        document.getElementById('#header'),
                        {from: {opacity:0}, to: {opacity:1}, duration: 1000}
                  );
```

#### DomTweenable.seek(millisecond)
Move the state of the animation to a specific point in the DomTweenable tween's timeline.<br>
The CSS properties at the specified point will be applied to the DomElement.
```javascript
// Move the state of the animation to the 400ms point in the tween's timeline 
// and apply CSS properties.
domTweenable.seek(400);
```

#### Timeline(config)
Constructor for a Timeline object.<br>
Takes as param a config (optional). 
```javascript
// Create a timeline to place DomTweenable objects on.
var timeline = new Timeline({duration: 200});
```

#### Timeline.add(DomTweenable, millisecond)
Add a DomTweenable object to the Timeline at a specific point in the Timeline.<br>
The DomTweenable tween will start at the specified position
```javascript
// Add the DomTweenable to the timeline at the 300ms position.
timeline.add(domTweenable, 300);
```

#### Timeline.seek(millisecond)
Move the current state to a specific point in the Timeline tween's timeline. <br>
For each DomTweenable intersecting at the point, apply the CSS properties in the DomTweenable's tween to it's respective DOM element.
```javascript
// Move the pointer on the timeline to the 400ms position and 
// update the Timeline's DomTweenable objects state.
timeline.seek(400);
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
