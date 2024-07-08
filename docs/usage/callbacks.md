---
sidebar_position: 4
---

# Callbacks
## onBeforeRoll
This callback is triggered before the roll begins, but after the notation has been parsed. The callback argument includes the parsed notation.
```javascript
diceBox.onBeforeRoll = (parsedNotation) => console.log('parsedNotation', parsedNotation)
```

## onDieComplete
This callback is triggered whenever an individual die has completed rolling and contains the die result object as it's argument.
```javascript
diceBox.onDieComplete = (dieResult) => console.log('die result', dieResult)
```

## onRollComplete
This callback is triggered whenever all the dice have finished rolling and/or the physics simulation has been stopped and contains the roll result object as it's argument.
```javascript
diceBox.onRollComplete = (rollResult) => console.log('roll results', rollResult)
```

## onRemoveComplete
This callback is triggered whenever a die has been removed from the scene and contains the die result object that was removed as it's argument.
```javascript
diceBox.onRemoveComplete = (dieResult) => console.log('die removed', dieResult)
```

## onThemeConfigLoaded
This callback is triggered after a theme config file has been successfully fetched and parsed. It contains the theme config data as an argument parameter.
```javascript
diceBox.onThemeConfigLoaded = (config) => console.log('theme config data', config)
```

## onThemeLoaded
This callback is triggered after the `onThemeConfigLoaded` is complete and the theme has fetched and loaded all the necessary 3D models, textures, and materials it needs. It contains the theme config data as an argument parameter.
```javascript
diceBox.onThemeLoaded = (config) => console.log('theme config data', config)
```