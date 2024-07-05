---
sidebar_position: 5
---

# Display Results
Another module available as part of the [@3d-dice/dice-ui](https://github.com/3d-dice/dice-ui) package. This module takes the [final result object](/docs/usage/objects#roll-result-array-object) as input and creates a modal popup window displaying the final roll results and the final value of that roll. 

![Display Results Screenshot](/img/10d6-crits.png)

This module will also apply styles based on different roll properties such as `crit-success`, `crit-failure`, `die-dropped`, `die-rerolled`, and `die-exploded`.

If the roll had a specified target number for success then this module will display either a green checkmark for success, a red x for failure and a gray minus for null (neither success or failure). It will also display the sum total of successes.

This module now supports string values and an array of string values. This is useful if the dice faces represent symbols or text (e.g.: "Left, Right, Center" or "Genesys").

## Install
Add the dice-ui module using
```
npm install @3d-dice/dice-ui
```

## Setup
Then create a new instance of the roller
```javascript
import { DisplayResults } from '@3d-dice/dice-ui'

const Display = new DisplayResults()
```

## Config
The constructor only accepts one argument which is a CSS selector where this component should be injected into the DOM.

| Option | type | default | Description |
|-|-|-|-|
| target | `string` :dom node selector | `document.body` | The target DOM node to inject the display results into |

## Methods
| Method | Arguments | Description |
|-|-|-|
| showResults | `rollResults` :object | Takes roll results as input and generates a popup display |
| clear | none | hides the popup display with a CSS transition effect |

Example
```javascript
const results = {
  count: {
    type: "number",
    value: 2,
    success: null,
    successes: 0,
    failures: 0,
    valid: true,
    order: 0
  },
  die: {
    type: "number",
    value: 20,
    success: null,
    successes: 0,
    failures: 0,
    valid: true,
    order: 0
  },
  rolls: [
      {
      critical: null,
      die: 20,
      matched: false,
      order: 0,
      roll: 19,
      success: null,
      successes: 0,
      failures: 0,
      type: "roll",
      valid: false,
      value: 19,
      drop: true
    },
    {
      critical: "success",
      die: 20,
      matched: false,
      order: 1,
      roll: 20,
      success: null,
      successes: 0,
      failures: 0,
      type: "roll",
      valid: true,
      value: 20
    }
  ],
  success: null,
  successes: 0,
  failures: 0,
  type: "die",
  valid: true,
  value: 20,
  order: 0,
  matched: false
}

Display.showResults(results)
```

## Styles
<div className="displayResults">

| class name | example |
|-|:-:|
|`crit-success`|<span className="crit-success">**20**</span>|
|`crit-failure`|<span className="crit-failure">**1**</span>|
|`die-dropped`|<span className="die-dropped">**2**</span>|
|`die-rerolled`|<span className="die-rerolled">**1**</span>|
|`die-exploded`|<span className="die-exploded">**6**</span>|
|`success`|<span className="success">![success](/img/icons/displayResults/checkmark.svg)</span>|
|`failure`|<span className="failure">![failure](/img/icons/displayResults/cancel.svg)</span>|
|`null`|<span className="null">![null](/img/icons/displayResults/minus.svg)</span>|

 </div>

 ## Examples
 `4d6!` (exploding roll)

 ![exploding 4d6](/img/dr-explode.png)

`10d10>7` (targeted success roll)

![target roll](/img/dr-targeted.png)

`2d20kh` (advantage roll - keep highest)

![reroll](/img/dr-dropped.png)

`2d10ro<2` (reroll once 2s or less)

![reroll](/img/dr-reroll.png)
