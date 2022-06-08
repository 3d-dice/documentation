---
sidebar_position: 4
---

# Callbacks
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
This callback is triggered whenever a die has been removed from the scene and contains the die result object that was removed as it's argument..
```javascript
diceBox.onRemoveComplete = (dieResult) => console.log('die removed', dieResult)
```