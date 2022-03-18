---
sidebar_position: 2
---

# Usage
Dice-Box can only accept simple dice notations and a modifier such as `2d20` or `2d6+4` It returns a result object once the dice have stopped rolling. For more advanced rolling features you'll want to look at adding [@3d-dice/dice-roller-parser](https://github.com/3d-dice/dice-roller-parser) which supports the full [Roll20 Dice Specification](https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates).

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

## Die Types
This documentation makes frequent reference to common dice notations such as `5d6` where the first number represents the number of dice to roll and the `d#` represents the number of sides on a die. Currently support dice are `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, and `d100`

## Common Objects
### Roll Object
```javascript
{
  modifier: int,   // optional - the modifier (positive or negative) to be added to the final results
  qty: int,        // the number of dice to be rolled
  sides: int,      // the type of die to be rolled
  theme: string,   // optional - the theme for this roll
}
```

### Individual Die Result Object
```javascript
{
  groupId: int,    // the roll group this die belongs to
  rollId: int,     // the unique identifier for this die within the group
  sides: int,      // the type of die
  theme: string,   // the theme that was assigned to this die
  value: int,     // the result for this die
}
```

### Roll Result Array Object
```javascript
[
  {                    // the roll group object
    id: 0,             // the id of this group - should match the groupId of rolls
    mods: [],          // the roll modifier
    qty: int,          // the number of dice in this roll
    rolls: [           // an array of Die Result Objects
      {
        groupId: int,
        result: int,
        rollId: int,
        sides: int,
        theme: string,
      }
    ],
    sides: int,        // the type of die used
    theme: string      // the theme for this group of dice
    value: int         // the sum of the dice roll results and modifier
  }
]
```

The result object for `3d6` will look something like this
```javascript
[
  {
    id: 0,
    mods: [],
    qty: 3,
    rolls: [
      {
        sides: 6,
        groupId: 0,
        rollId: 0,
        theme: 'diceOfRolling',
        value: 5
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 1,
        theme: 'diceOfRolling',
        value: 2
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 2,
        theme: 'diceOfRolling',
        value: 3
      }
    ],
    sides: 6,
    value: 10
  }
]
```

#### What's the difference between `groupId`, and `rollId`?
__groupId__: the roll group this die is a part of. This becomes more useful with the advanced dice roller that accepts notations such as `2d10+2d6`. In this case `groupId: 0` would be assigned to the 2d10 and `groupId: 1` would be assigned to the 2d6

__rollId__: the id of the die within the group. By default this is incremented automatically by the dice roller, however there are cases where the rollId is assigned, such as exploding die. In this case, in order to make an association between the 'exploder' and the 'explodee' the rollId of the added die is set to a decimal value of the triggering die. For example with 1d6 that explodes twice: 
```javascript
[
  {
    qty: 3,
    sides: 6,
    mods: [
      {
        type: 'explode',
        target: null
      }
    ],
    rolls: [
      {
        sides: 6,
        groupId: 0,
        rollId: 0,
        theme: 'diceOfRolling',
        value: 6
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 0.1,
        theme: 'diceOfRolling',
        value: 6
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 0.2,
        theme: 'diceOfRolling',
        value: 5
      }
    ],
    id: 0,
    value: 17
  }
]
```

## Methods

### Promised based rolls
The methods `.roll()`,`.add()`, `.reroll()` and `.remove()` are all methods that return a promise containing the results of the dice rolled by the callee. So it is possible to write `diceBox.roll('4d6').then(results => console.log(results))`. Results can also be retrieved from the `onRollComplete` callback event or by using the `.getRollResults()` method (not a promise).

### Roll
A roll will clear current dice and start a new roll. Returns a promise with an array of *die results*
```javascript
roll(notation:mixed, options = {theme:string, newStartPoint:boolean})
``` 
#### Example
```javascript
diceBox.roll('2d20',{theme:'#4b8968'})
```

#### Arguments
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
1. a mixed array of Roll Objects and string notation. e.g.:`[{{qty: 2, sides: 10}},'2d8']`
:::

#### Options
| Key | Type | Default Value | Description |
|-|-|-|-
| theme | string - optional | `undefined` | a named theme or HEX value for the roll. This value will override theme values that appear in the notation object |
| newStartPoint | boolean - optional | `true` | will toss the dice in from a new point along the edge of the box |

:::info Themes
Themes can be specified in four different places. On the config object at initialization, as an options parameter when using `.roll()` or `.add()`, as specified in a _roll object_ and as specified in a _die result object_. Themes are applied in the order of _options parameter_ first, _roll object_ or _die result object_ second and box _config option_ third. The _roll object_ and _die result object_ are processed at the same level.
:::

### Add
This method will add the specified notation to the current roll in a new roll group. Returns a promise with an array of *die results* for the dice that were added.
```javascript
add(notation:mixed, options = {theme:string, newStartPoint:boolean})
```
#### Example
```javascript
diceBox.add([{qty: 2, sides: 8},'1d6'],{newStartPoint: false})
```

#### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | string \| array \| notation object \| array of notation objects | n\a | Same as `roll` notation description |
| options | object | see `roll` options | options that can be set with each roll |

### Reroll
This method will reroll a die. Returns a promise with an array of die results for the dice that were rerolled. 
```javascript
reroll(notation:mixed, options = {remove:boolean, newStartPoint:boolean})
```
#### Example
```javascript
diceBox.reroll({groupId: 0,rollId: 2})
```

#### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | notation object \| array of notation objects | n\a | See notation note below. Valid notation includes objects returned from `roll` and `add` promises. |
| options | object | see options | options that can be set with each roll |

:::note
The __notation__ argument here requires an roll object or an array of roll objects identifying the roll group `groupId` and die `rollId` you wish to reroll. Die result objects from previous rolls are valid arguments and can be passed in to trigger a reroll.
:::

#### Options
| Key | Type | Default Value | Description |
|-|-|-|-
| remove | boolean - optional | `false` | indicates the die being rerolled should be removed from the scene |
| newStartPoint | boolean - optional | `true` | will toss the dice in from a new point along the edge of the box |


### Remove
Remove dice from the scene. Returns a promise with an array of die results for the dice that were removed.
```javascript
remove(notation:mixed)
```
#### Example
```javascript
diceBox.remove({groupId: 0,rollId: 2})
```

#### Arguments
| Argument | Type | Default Value | Description |
|-|-|-|-|
| notation | notation object \| array of notation objects | n\a | Same as `reroll` notation description |


### Clear
This will clear all dice from the scene.
```javascript
diceBox.clear()
```

### Hide
This will hide the canvas element that the Dice Box is rendered to.
```javascript
diceBox.hide()
```

### Show
This will show the canvas element that the Dice Box is rendered to.
```javascript
diceBox.show()
```

### Get Roll Results
Get the results of all the dice in the scene at anytime. However, if dice are still rolling they will not have a value yet.
```javascript
diceBox.getRollResults() // returns an array of roll result objects
```

## Callbacks
### onDieComplete
This callback is triggered whenever an individual die has completed rolling and contains the die result object as it's argument.
```javascript
Box.onDieComplete = (dieResult) => console.log('die result', dieResult)
```

### onRollComplete
This callback is triggered whenever all the dice have finished rolling and/or the physics simulation has been stopped and contains the roll result object as it's argument.
```javascript
Box.onRollComplete = (rollResult) => console.log('roll results', rollResult)
```

### onRemoveComplete
This callback is triggered whenever a die has been removed from the scene and contains the die result object that was removed as it's argument..
```javascript
Box.onRemoveComplete = (dieResult) => console.log('die removed', dieResult)
```