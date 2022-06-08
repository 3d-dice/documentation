---
sidebar_position: 1
---

# Getting Started
It should be noted that Dice-Box can only accept simple dice notations or notation objects such as `2d20` or `{qty:2,sides:20}`. Once the notation has been sent to Dice-Box using the `roll` method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit. 

This may seem overly simplistic because _TTRPG_ rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing both the input and the output to determine the final result, such as __advantage__ rolls, __exploding__ rolls or __target__ rolls, you'll need a parser to supply that functionality. 3D-dice supplies one called [Dice Parser Interface](https://github.com/3d-dice/dice-parser-interface) which supports the full [Roll20 Dice Specification](https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates). Read more about Dice Parser Interface in the addons section.

## Install the module

The core library can be install from npm using:
```
npm install @3d-dice/dice-box
```

### Copy static assets
When installing the library, the terminal will ask you to identify a destination for static assets. This defaults to `/public/assets` and will timeout after 10 seconds. You can always manually move these files. They can be found in the `@3d-dice/dice-box/src/assets` folder. Copy everything from this folder to your local static assets or public folder.

## Create a new instance
Currently this project is an ES module intended to be part of a build system. To import the module into your project use:
```javascript
import DiceBox from '@3d-dice/dice-box'
```

Create a new instance of the `DiceBox` class. The two arguments for the constructor are a selector for the target DOM node followed by an object of config options. Be sure to set the path to the assets folder mentioned earlier. The `assetPath` is the only required config option.
```javascript
const diceBox = new DiceBox("#dice-box", {
  assetPath: '/assets/dice-box/' // include the trailing backslash
})
```

## Configuration Options
These options can be passed into the constructor when creating a new instance of Dice-Box

| Option | Default Setting | Description |
|-|-|-|
| id               | 'dice-canvas'   | The ID of the canvas element to use. If no canvas present then one will be created |
| assetPath        | '/assets/'      | The path to static assets needed by this module. *required |
| gravity          | 1               | Too much gravity will cause the dice to jitter. Too little and they take much longer to settle.
| mass             | 1               | The mass of the dice. Affects how forces act on the dice such as spin |
| friction         | .8              | The friction of the dice and the surface they roll on |
| restitution      | 0               | The bounciness of the dice |
| angularDamping   | .4              | Determines how quickly the dice lose their spin (angular momentum) |
| linearDamping    | .4              | Determines how quickly the dice lose their linear momentum |
| spinForce        | 4               | The maximum amount of spin the dice may have |
| throwForce       | 5               | The maximum amount of throwing force used |
| startingHeight   | 8               | The height at which the toss begins |
| settleTimeout    | 5000            | Time in ms before a die is stopped from moving |
| offscreen        | true            | If offscreenCanvas is available it will be used |
| delay            | 10              | The delay between dice being generate. If they're all generated at the same time they instantly collide with each other which doesn't look very natural. |
| lightIntensity   | 1               | Global illumination levels |
| enableShadows    | true            | Do the dice cast a shadow? Turn off for a performance bump |
| shadowTransparency    | .8              | Set the transparency of the shadows cast by the dice |
| theme            | 'default'       | For additional themes see [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes) |
| themeColor       | '#2e8555'       | Some themes allow for a configurable base color as a HEX value |
| scale            | 6               | Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers |
| suspendSimulation| false           | Turn off the 3D simulation and use the built-in random number generator instead. |
| origin           | location.origin | Sets the site origin used for constructing paths to assets. |
| onDieComplete    | function        | callback function triggered whenever an individual die has completed rolling |
| onRollComplete   | function        | callback function triggered whenever all the dice have completed rolling |
| onRemoveComplete | function        | callback function triggered whenever a die has been removed from the scene |
| onThemeConfigLoaded | function     | callback function triggered after a theme config file has been successfully fetched and parsed |
| onThemeLoaded    | function        | callback function triggered after a theme has finished loading all related assets |

## Initialize
After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a `.then()` method.
```javascript
diceBox.init().then(()=>{
  diceBox.roll('2d20')
})
```