---
sidebar_position: 1
---

# Intro

Do you love _TTRPG_ and wish you had some 3D dice to incorporate into your side projects? That's exactly why I started this project. This is a high performance 3D dice roller made with [BabylonJS](https://www.babylonjs.com/), [AmmoJS](https://github.com/kripken/ammo.js/) and implemented with lightning fast [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) and [offscreenCanvas](https://doc.babylonjs.com/divingDeeper/scene/offscreenCanvas). Designed to be easy to integrate into your own JavaScript app with a package payload under 1 megabyte after compression.

## Open Source

Everything in the [@3d-dice](https://github.com/3d-dice/) suite falls under the [MIT license](https://opensource.org/licenses/MIT) or the [CC0 license](https://creativecommons.org/share-your-work/public-domain/cc0/) license. This means it's free for commercial use and redistribution. I've benefited from open source software for years and this is my "give back".

## Die Types

This documentation makes frequent reference to common dice notations such as `5d6` where the first number represents the number of dice to roll and the `d#` represents the number of sides on a die. The default theme dice are `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, and `d100`. 

With the latest version of DiceBox, `d#` represents the die type or name that is being used. For example, with the Genesys dice set, you may roll `4dboost` dice or `2dability`.

## Feature Requests

This project id under active development with more features in the pipeline. Feel free to add feature requests into the [Github issue tracker](https://github.com/3d-dice/dice-box/issues).

## Show me some code

See the kitchen sink code demo here: https://codesandbox.io/p/sandbox/3d-dice-demo-v1-1-3-68tvkl

Here's a simple React Demo for rolling attributes (using 3d6): https://codesandbox.io/p/sandbox/react-roller-attributes-v1-1-3-65uqhv

Here's a React Demo with support for advanced dice notation: https://codesandbox.io/s/react-roller-advanced-notation-v1-1-3-rz0nmr  
