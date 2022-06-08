---
sidebar_position: 2
---

# Common Objects
## Roll Object
The roll object is whats required by the `roll` and `add` methods. At a minimum you must specify the number of sides of the dice to be rolled.
```javascript
{
  modifier: int,   // optional - the modifier (positive or negative) to be added to the final results
  qty: int,        // optional - the number of dice to be rolled. Defaults to 1
  sides: int,      // the type of die to be rolled
  theme: string,   // optional - the theme for this roll
}
```

## Individual Die Result Object
When die results are returned they will contain the information listed below. Individual die results can then be passed back in to `roll`, `add`, `reroll` and `remove` methods as the notation argument.
```javascript
{
  groupId: int,    // the roll group this die belongs to
  rollId: int,     // the unique identifier for this die within the group
  sides: int,      // the type of die
  theme: string,   // the theme that was assigned to this die
  value: int,     // the result for this die
}
```

## Roll Result Array Object
The results object will contain an array of roll groups and the individual rolls made in those groups. For example, `3d6` would create a _roll group_ with three _rolls_ in it.
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
    groupId: 0,
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

### What's the difference between `groupId`, and `rollId`?
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