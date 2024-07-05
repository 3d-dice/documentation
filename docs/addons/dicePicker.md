---
sidebar_position: 4
---

# Dice Picker
This is a simple UI module aimed at making picking dice simple and easy. I put this module together mostly to make setting up simple rolls on mobile devices easy. Just tap away at the dice you want to roll. It's very similar in nature to [Advanced Roller](/docs/addons/advRoller).

This module is for the standard 7 _TTRPG_ dice. The main intention of this module is to function as an example of how to create your own UI interface for the Dice Box.

![Dice Picker Screenshot](/img/dicePicker1.jpg)

## Install
Add the dice-ui module using
```
npm install @3d-dice/dice-ui
```

## Setup
Then create a new instance of the picker
```javascript
import { DicePicker } from '@3d-dice/dice-ui'

const dicePicker = new DicePicker()
```

### Config Options
The `DicePicker` only has one argument which is a config object

| Option | type | default | Description |
|-|-|-|-|
| target | `string` :dom node selector | `document.body` | The target DOM node to inject the roller into |
| onSubmit | `function` | noop | callback triggered on form submit, after notation has been parsed |
| onClear | `function` | noop | callback triggered when form reset event is triggered |
| onReroll | `function` | noop | callback triggered when FDP returns reroll results |
| onResults | `function` | noop | callback triggered when there are no reRoll results and the final result object has been parsed by FDP |

## Methods

| Method | Arguments | Description |
|-|-|-|
| submitForm | `event` :event - form submit | Take the submit event and passes the input notation to FDP. Calls `onSubmit` callback with results. |
| clear | none | Clears the current notation and any values stored in FDP. Calls the `onClear` callback |
| setNotation | `notation` :object | Set the default values for tossing, sort of like placeholder values |
| handleResults | `results` :object | Passes roll results object to FDP to check for rerolls. Gets the final parsed results from FDP. Calls `onResults` callback |

:::note
There's currently nothing in Dice Picker that would trigger rerolls. Most of the code in this module was copied from the Advanced Roller
:::

With the exception of `setNotation` these methods and callbacks operate the same as the [Advanced Roller](/docs/addons/advRoller).

`setNotation` example:
```javascript
dicePicker.setNotation({
  d4: {
    count: 2
  },
  d6: {
    count: 2
  },
  d8: {
    count: 2
  },
  d10: {
    count: 2
  },
  d12: {
    count: 2
  },
  d20: {
    count: 2
  },
  d100: {
    count: 1
  }
})
```

Screenshot with notation set:
![Set Notation](/img/dicePicker2.jpg)