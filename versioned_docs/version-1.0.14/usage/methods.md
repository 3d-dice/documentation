---
sidebar_position: 3
---

# Methods

## Promised based rolls
The methods `.roll()`,`.add()`, `.reroll()` and `.remove()` are all methods that return a promise containing the results of the dice rolled by the callee. So it is possible to write `diceBox.roll('4d6').then(results => console.log(results))`. Results can also be retrieved from the `onRollComplete` callback event or by using the `.getRollResults()` method (not a promise).

## Roll
A roll will clear current dice and start a new roll. Returns a promise with an array of *die results*
```javascript
roll(notation:mixed, options = {theme:string, newStartPoint:boolean})
``` 
### Example
```javascript 
diceBox.roll('2d20',{theme:'rust'})
```

### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | string \| array \| notation object \| array of notation objects | n\a | See notation description |
| options | object | see options | options that can be set with each roll |

:::info Notation
The notation argument can accept the following roll formats
1. simple string notation described as 'number of dice' + 'd' + 'number of sides on the die'. e.g.: `5d6` rolls five six-sided dice.
1. an array of string notation. e.g.: `['2d10','2d6']`
1. a Roll Object as described above. e.g.:`{qty: 5, sides: 10}`
1. an array of Roll Objects. e.g.:`[{qty: 2, sides: 10},{qty: 1, sides: 6}]` |
1. a mixed array of Roll Objects and string notation. e.g.:`[{qty: 2, sides: 10},'2d8']`
:::

### Options
| Key | Type | Default Value | Description |
|-|-|-|-
| theme | string - optional | `undefined` | the systemName of a theme for the roll. This value will override theme values that appear in the notation object |
| newStartPoint | boolean - optional | `true` | will toss the collection of dice in from a new point along the edge of the box |

:::info Themes
Themes can be specified in four different places. On the config object at initialization, as an options parameter when using `.roll()` or `.add()`, as specified in a _roll object_ and as specified in a _die result object_. Themes are applied in the order of _options parameter_ first, _roll object_ or _die result object_ second and box _config option_ third. The _roll object_ and _die result object_ are processed at the same level.
:::

## Add
This method will add the specified notation to the current roll in a new roll group. Returns a promise with an array of *die results* for the dice that were added.
```javascript
add(notation:mixed, options = {theme:string, newStartPoint:boolean})
```
### Example
```javascript
diceBox.add([{qty: 2, sides: 8},'1d6'],{newStartPoint: false})
```

### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | string \| array \| notation object \| array of notation objects | n\a | Same as `roll` notation description |
| options | object | see `roll` options | options that can be set with each roll |

## Reroll
This method will reroll a die. Returns a promise with an array of die results for the dice that were rerolled. 
```javascript
reroll(notation:mixed, options = {remove:boolean, newStartPoint:boolean})
```
### Example
```javascript
diceBox.reroll({groupId: 0,rollId: 2})
```

### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | notation object \| array of notation objects | n\a | See notation note below. Valid notation includes objects returned from `roll` and `add` promises. |
| options | object | see options | options that can be set with each roll |

:::note
The __notation__ argument here requires an roll object or an array of roll objects identifying the roll group `groupId` and die `rollId` you wish to reroll. Die result objects from previous rolls are valid arguments and can be passed in to trigger a reroll.
:::

### Options
| Key | Type | Default Value | Description |
|-|-|-|-
| remove | boolean - optional | `false` | indicates the die being rerolled should be removed from the scene |
| newStartPoint | boolean - optional | `true` | will toss the collection of dice in from a new point along the edge of the box |


## Remove
Remove dice from the scene. Returns a promise with an array of die results for the dice that were removed.
```javascript
remove(notation:mixed)
```
### Example
```javascript
diceBox.remove({groupId: 0,rollId: 2})
```

### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | notation object \| array of notation objects | n\a | Same as `reroll` notation description |


## Clear
This will clear all dice from the scene.
```javascript
diceBox.clear()
```

## Hide
This will hide the canvas element that the Dice-Box is rendered to.
```javascript
diceBox.hide()
```

## Show
This will show the canvas element that the Dice-Box is rendered to.
```javascript
diceBox.show()
```

## Get Roll Results
Get the results of all the dice in the scene at anytime. However, if dice are still rolling they will not have a value yet.
```javascript
diceBox.getRollResults() // returns an array of roll result objects
```

## Update Config
Use this method to update any of the [config settings](/docs/usage/config#configuration-options). Most settings will be applied immediately, but theme/dice color changes will only take effect before or after a roll.
```javascript
diceBox.updateConfig({configObject})
```