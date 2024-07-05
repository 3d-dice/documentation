---
sidebar_position: 7
---

# Genesys Results
This module has most of the same features as [Display Results](/docs/addons/displayResults). It takes the [final result object](/docs/usage/objects#roll-result-array-object) as input and creates a modal popup window displaying the final roll result totals.

![Display Results Screenshot](/img/addons/genesysResults.jpg)

This module supplies symbols matching the dice face values and colorizes them to match the die that produced them. 

:::note
This module is for use with the [Genesys dice theme](/docs/themes/genesys). The main intention of this module is to function as an example of how to create your own UI interface for the Dice Box.
:::

## Install
Add the dice-ui module using
```
npm install @3d-dice/dice-ui
```

## Setup
Then create a new instance of the roller
```javascript
import { GenesysResults } from '@3d-dice/dice-ui'

const Display = new GenesysResults()
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

## Styles
All styles are scoped to `.genesysResults`.
<div className="genesysResults">

| class name | example |
|-|:-:|
|`die-boost`      | <span className="die-boost"><svg className="symbol"><use xlinkHref="/img/addons/genesys-icons.svg#advantage" /></svg></span>    |
|`die-setback`    | <span className="die-setback"><svg className="symbol"><use xlinkHref="/img/addons/genesys-icons.svg#threat" /></svg></span>     |
|`die-ability`    | <span className="die-ability"><svg className="symbol"><use xlinkHref="/img/addons/genesys-icons.svg#success" /></svg></span>    |
|`die-difficulty` | <span className="die-difficulty"><svg className="symbol"><use xlinkHref="/img/addons/genesys-icons.svg#failure" /></svg></span> |
|`die-challenge`  | <span className="die-challenge"><svg className="symbol"><use xlinkHref="/img/addons/genesys-icons.svg#despair" /></svg></span>  |
|`die-proficiency`| <span className="die-proficiency"><svg className="symbol"><use xlinkHref="/img/addons/genesys-icons.svg#triumph" /></svg></span>|

</div>

:::note
Empty faces with no value are not shown in the results
:::

## Tooltips
A simple tooltip has been implemented in this module to help identify the symbols on hover.
![Display Results with tooltip Screenshot](/img/addons/genesysResults-tooltip.jpg)