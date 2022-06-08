---
sidebar_position: 1
---

# Intro

Do you love TTRPG's and wish you had some 3D dice to incorporate into your side projects? That's exactly why I started this project. This is a high performance 3D dice roller made with [BabylonJS](https://www.babylonjs.com/), [AmmoJS](https://github.com/kripken/ammo.js/) and implemented with lightning fast [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) and [offscreenCanvas](https://doc.babylonjs.com/divingDeeper/scene/offscreenCanvas). Designed to be easy to integrate into your own JavaScript app with a package payload under 1 megabyte after compression.

## Getting Started

### Install the module

The core library can be install from npm using:
```
npm install @3d-dice/dice-box
```

### Copy static assets
As a post-install script, the module will attempt to copy files over to `/public/assets`. If this does not work then you'll need to manually copy some files over to your project. They can be found in the `@3d-dice/dice-box/src/assets` folder. Copy everything from this folder to your local static assets or public folder.

## Die Types
This documentation makes frequent reference to common dice notations such as `5d6` where the first number represents the number of dice to roll and the `d#` represents the number of sides on a die. Currently support dice are `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, and `d100`

## Show me some code
See the kitchen sink code demo here: https://codesandbox.io/s/3d-dice-demo-2bily5

Here's a simple React Demo for rolling attributes (using 3d6): https://codesandbox.io/s/react-roller-attributes-6jjiod

Here's a React Demo with support for advanced dice notation: https://codesandbox.io/s/react-roller-advanced-notation-xl8foh
