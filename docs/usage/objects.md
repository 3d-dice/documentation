---
sidebar_position: 2
---

# Common Objects
## Roll Object
The roll object is whats required by the `roll` and `add` methods. At a minimum you must specify the number of sides of the dice to be rolled.
```javascript
{
  modifier: int,      // optional - the modifier (positive or negative) to be added to the final results
  qty: int,           // optional - the number of dice to be rolled. Defaults to 1
  sides: mixed,       // the type of die to be rolled. Either a number such as 20 or a die type such as "fate".
  theme: string,      // optional - the theme's 'systemName' for this roll
  themeColor: string  // optional - HEX value for the theme's material color
}
```

## Individual Die Result Object
When die results are returned they will contain the information listed below. Individual die results can then be passed back in to `roll`, `add`, `reroll` and `remove` methods as the notation argument.
```javascript
{
  groupId: int,       // the roll group this die belongs to
  rollId: int,        // the unique identifier for this die within the group
  sides: int,         // the type of die
  theme: string,      // the theme that was assigned to this die
  themeColor: string  // optional - HEX value for the theme's material color
  value: int,         // the result for this die
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
        themeColor: string,
      }
    ],
    sides: int,        // the type of die used
    theme: string      // the theme for this group of dice
    themeColor: string // the theme color for this group of dice
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
        themeColor: null,
        value: 5
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 1,
        theme: 'diceOfRolling',
        themeColor: null,
        value: 2
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 2,
        theme: 'diceOfRolling',
        themeColor: null,
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
        themeColor: null,
        value: 6
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 0.1,
        theme: 'diceOfRolling',
        themeColor: null,
        value: 6
      },
      {
        sides: 6,
        groupId: 0,
        rollId: 0.2,
        theme: 'diceOfRolling',
        themeColor: null,
        value: 5
      }
    ],
    id: 0,
    value: 17
  }
]
```

## Theme Config Object

This object is required to load a theme
```javascript
{
  name: string,                  // the pretty name of this theme, can include spaces and special characters
  systemName: string,            // required - the camelCased system name for this theme, used internally
  extends: string,               // optional - The theme systemName this theme extends
  author: string,                // optional - author of this theme
  version: number,               // optional - version of this theme
  thumbnail: string,             // optional - A rendered image of what this dice theme looks like
  meshFile: string,              // the relative path and file name that contains the 3D mesh data for this theme. Only required if not using 'default' mesh. This can point to a shared mesh file located anywhere in static assets folder.
  meshName: string,              // the system name used for this theme's 3D models. Only required if not using 'default' mesh. If sharing a mesh file with another theme, then it should have the same meshName as the one it's sharing.
  diceAvailable: [],             // a list of dice available (:string) with this theme. Only required if different from the default ['d4','d6','d8','d10','d12','d20','d100']
  material: {
    type: string,                // required - the type of material being loaded for this theme
    diffuseTexture: string || {  // either the relative path and file name of a texture file or an object
      light: string,             // the relative path and file name of the 'light' texture used for HEX color based materials
      dark: string               // the relative path and file name of the 'dark' texture used for HEX color based materials
    },
    diffuseLevel: float,         // optional - intensity or strength of the texture
    bumpTexture: string,         // optional - the relative path and file name of a texture file
    bumpLevel: float,            // optional - intensity or strength of the texture
    specularTexture: string,     // optional - the relative path and file name of a texture file
    specularPower: float         // optional - defines how sharp are the highlights in the material
  },
  themeColor: string,            // a HEX value to be applied to a color material.
  d4FaceDown: false,             // optional - calculate the d4 value based on the downward facing 3D mesh face id
}
```