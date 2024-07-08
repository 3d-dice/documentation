---
sidebar_position: 1
---

# Getting Started
It should be noted that Dice-Box can only accept simple dice notations or notation objects such as `2d20` or `{qty:2,sides:20}`. Once the notation has been sent to Dice-Box using the `roll` method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit. 

This may seem overly simplistic because _TTRPG_ rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing both the input and the output to determine the final result, such as __advantage__ rolls, __exploding__ rolls or __target__ rolls, you'll need a parser to supply that functionality. @3D-dice supplies a module called [Dice Parser Interface](https://github.com/3d-dice/dice-parser-interface) which supports the full [Roll20 Dice Specification](https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates). Read more about the [parser](/docs/addons/parser) in the addons section.

## Install the module

The core library can be install from npm using:
```
npm install @3d-dice/dice-box
```

### Copy static assets
When installing the library, the terminal will ask you to identify a destination for static assets. This defaults to `/public/assets` and will timeout after 10 seconds. You can always manually move these files. They can be found in the `@3d-dice/dice-box/src/assets` folder. Copy everything from this folder to your local static assets or public folder.

If you're using npm version 7 or later, postinstall scripts output are suppressed. This means you will not be prompted to pick a directory. Instead, you will have to move the static assets manually.

## Import the module
To import the module into a project with a build system (e.g.: vite or webpack):
```javascript
import DiceBox from '@3d-dice/dice-box'
```
### ES Module
This project is built as an ES module. To import Dice Box as an ES module:
```javascript
import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/dice-box.es.min.js";
```
If you plan on using the `unpkg.com` CDN, then you'll also have to set the following config options. The drawback to this approach means you are limited to the default dice set (at the moment).
```javascript
  assetPath: "assets/",
  origin: "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/",
```
Code Sandbox Example: [Dice Box as ES Module](https://codesandbox.io/p/sandbox/dice-es6-module-cdn-forked-kjjhrl?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqzbzts700063b6gtwn6xgvx%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqzbzts700023b6g6vcw15hp%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqzbzts700033b6g9jzf4diw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqzbzts700053b6gy7b707sv%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B45.52808141267785%252C54.47191858732215%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqzbzts700023b6g6vcw15hp%2522%253A%257B%2522id%2522%253A%2522clqzbzts700023b6g6vcw15hp%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwv4eq3o00023b6h9o827qay%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clwv4eq3o00023b6h9o827qay%2522%257D%252C%2522clqzbzts700053b6gy7b707sv%2522%253A%257B%2522id%2522%253A%2522clqzbzts700053b6gy7b707sv%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqzbzts700043b6gtgdalbp8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clqzbzts700043b6gtgdalbp8%2522%257D%252C%2522clqzbzts700033b6g9jzf4diw%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqzbzts700033b6g9jzf4diw%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A10%257D)


## Create a new instance
Create a new instance of the `DiceBox` class. The single argument[^1] for the constructor is an object of config options. Be sure to set the path to the assets folder mentioned earlier. The `assetPath` is the only required config option.
```javascript
const diceBox = new DiceBox({
  assetPath: '/assets/dice-box/' // include the trailing backslash
})
```

## Configuration Options
These options can be passed into the constructor when creating a new instance of Dice-Box

| Option | Default Setting | Description |
|-|-|-|
| id               | 'dice-canvas'   | The ID of the canvas element. |
| assetPath        | '/assets/'      | The path to static assets needed by this module. *required |
| container[^1]    | `document.body` | A query selector for the DOM element to place the dice box canvas in. |
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
| shadowTransparency | .8            | Set the transparency of the shadows cast by the dice |
| theme            | 'default'       | For additional themes see [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes) |
| preloadThemes[^1]| []              | An array of themes to pre-load. Useful for themes that extend other themes. |
| externalThemes[^1]| {}             | An object with theme system names as the key value and an external url path to theme assets. Useful for accessing themes on a CDN.  |
| themeColor       | '#2e8555'       | Some themes allow for a configurable base color as a HEX value |
| scale            | 6               | Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers |
| suspendSimulation| false           | Turn off the 3D simulation and use the built-in random number generator instead. |
| origin           | location.origin | Sets the site origin used for constructing paths to assets. |
| onBeforeRoll[^1] | function        | callback function triggered after notation has been parsed, but before the roll starts |
| onDieComplete    | function        | callback function triggered whenever an individual die has completed rolling |
| onRollComplete   | function        | callback function triggered whenever all the dice have completed rolling |
| onRemoveComplete | function        | callback function triggered whenever a die has been removed from the scene |
| onThemeConfigLoaded | function     | callback function triggered after a theme config file has been successfully fetched and parsed |
| onThemeLoaded    | function        | callback function triggered after a theme has finished loading all related assets |

[^1]: new in `v1.1.x`

## Initialize
After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a `.then()` method.
```javascript
diceBox.init().then(()=>{
  diceBox.roll('2d20')
})
```

or, since `init` is a Promise, it can be awaited:

```javascript
await diceBox.init()
diceBox.roll('2d20')
```