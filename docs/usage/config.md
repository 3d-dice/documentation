---
sidebar_position: 1
---

# Setup
Dice-Box can only accept simple dice notations or notation objects such as `2d20` or `{qty:2,sides:20}`. This will kick off  the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit. 

This may seem overly simplistic because TTRPG rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing the results of the roll to determine the outcome, such as __advantage__ rolls, __exploding__ rolls or __target__ rolls, you'll need a parser to supply that functionality. I've built one called [Fantastic Dice Parser](https://github.com/3d-dice/FDP) which supports the full [Roll20 Dice Specification](https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates). Read more about Fantastic Dice Parser in the addons section.

## Create a new instance
Currently this project is an ES module intended to be part of a build system. To import the module into your project use:
```javascript
import DiceBox from '@3d-dice/dice-box'
```

Next create a new instance of the `DiceBox` class. The two arguments for the constructor are a selector for the target DOM node followed by an object of config options. Be sure to set the path to the assets folder copied earlier. The `assetPath` is the only required config option.
```javascript
const diceBox = new DiceBox("#dice-box", {
  assetPath: '/assets/'
})
```

## Configuration Options
These options can be passed into the constructor when creating a new instance of Dice-Box

| Option | Default Setting | Description |
|-|-|-|
|id|'dice-canvas'|The ID of the canvas element to use. If no canvas present then one will be created|
|assetPath|'/assets/'|The path to static assets needed by this module|
|gravity|1|Too much gravity will cause the dice to jitter. Too little and they take much longer to settle.
|mass|1|The mass of the dice. Affects how forces act on the dice such as spin|
|friction|.8|The friction of the dice and the surface they roll on|
|restitution|0|The bounciness of the dice|
|angularDamping|.4|Determines how quickly the dice lose their spin (angular momentum)|
|linearDamping|.4|Determines how quickly the dice lose their linear momentum|
|spinForce|4|The maximum amout of spin the dice may have|
|throwForce|5|The maximum amout of throwing force used|
|startingHeight|8|The height at which the toss begins|
|settleTimeout|5000|Time in ms before a die is stopped from moving|
|offscreen|true|If offscreenCanvas is available it will be used|
|delay|10|The delay between dice being generate. If they're all generated at the same time they instantly collide with each other which doesn't look very natural.|
|enableShadows|true|Do the dice cast a shadow? Turn off for a performance bump|
|theme|'diceOfRolling'|HEX color value or one of 'purpleRock', 'diceOfRolling', 'galvanized'.|
|scale|4| Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers |
|onDieComplete|function|callback function triggered whenever an individual die has completed rolling |
|onRollComplete|function|callback function triggered whenever all the dice have completed rolling |
|onRemoveComplete|function|callback function triggered whenever a die has been removed from the scene |

## Initialize
After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a .then() method.
```javascript
diceBox.init().then(()=>{
  diceBox.roll('2d20')
})
```