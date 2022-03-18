---
sidebar_position: 6
---

# Box Controls
Box Controls uses the popular [dat.GUI](https://github.com/dataarts/dat.gui) module which is self described as:
> A lightweight graphical user interface for changing variables in JavaScript 

Use this module if you want to dynamically experiment with the Dice-Box [config settings](/docs/usage/config#configuration-options) and see real time feedback. All changes are passed to Dice-Box's `updateConfig()` method.

## Install
Add the FUI module using
```
npm install @3d-dice/fui
```

## Setup
Then create a new instace of the picker
```javascript
import { BoxControls } from '@3d-dice/fui'

const Controls = new BoxControls({
  onUpdate: (updates) => {
    diceBox.updateConfig(updates)
  }
})
```

## Settings
### Sliders
| Config Options | min | default | max | step |
|-|:-:|:-:|:-:|:-:|
| gravity | 0 | 1 | 10 | 1 |
| mass | 1 | 1 | 20 | 1 |
| friction | 0 | .8 | 1 | .1 |
| restitution | 0 | 0 | 1 | .1 |
| linearDamping | 0 | .5 | 1 | .1 |
| angularDamping | 0 | .4 | 1 | .1 |
| spinForce | 0 | 6 | 15 | 1 |
| throwForce | 0 | 3 | 15 | 1 |
| startingHeight | 1 | 20 | 65 | 1 |
| settleTimeout 100| 0 | 5000 | 20000 | 1000 |
| delay | 10 | 10 | 500 | 10 |
| scale | 1 | 4 | 10 | .1 |

:::note
While the slider has a max setting, there is no enforced max in the module itself.
:::

### Checkbox
| Config Option | default |
|-|-|
| enableShadows | true |

### Combo Box
| Config Option | default | options |
|-|-|-|
| theme | 'undefined' | purpleRock \| diceOfRolling \| galvanized |

### Color Picker
| Config Option | default |
|-|-|
| theme | #0974E6 |

:::note Theme config
There are two controls for themes. One is the combo box with named themes and the other is the color picker. Whichever option was last set is the one that will be passed on to `updateConfig`
:::