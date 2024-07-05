---
sidebar_position: 6
---

# Genesys Dice Picker
This module has all the same features as [Dice Picker](/docs/addons/dicePicker). There are only a few UI differences to accommodate this unique dice set. Just tap away at the dice you want to roll.

:::note
This module is for use with the [Genesys dice theme](/docs/themes/genesys). The main intention of this module is to function as an example of how to create your own UI interface for the Dice Box.
:::

![Genesys Dice Picker Screenshot](/img/addons/genesysDicePicker1.jpg)

## Install
Add the dice-ui module using
```
npm install @3d-dice/dice-ui
```

## Setup
Then create a new instance of the picker
```javascript
import { GenesysDicePicker } from '@3d-dice/dice-ui'

const dicePicker = new GenesysDicePicker()
```

### Config Options
The `GenesysDicePicker` only has one argument which is a config object

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

`setNotation` example:
```javascript
dicePicker.setNotation({
  ability: {
    count: 0
  },
  boost: {
    count: 0
  },
  challenge: {
    count: 0
  },
  difficulty: {
    count: 0
  },
  proficiency: {
    count: 0
  },
  setback: {
    count: 0
  }
})
```

Screenshot with notation set:

![Set Notation](/img/addons/genesysDicePicker2.jpg)