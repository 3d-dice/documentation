---
slug: future-features
title: Future Features
authors: [frankieali]
tags: [chat]
---

This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this "side project" of mine. I'm going to leave some of those ideas here for future me.

1. I just discovered [Rapier.rs](https://rapier.rs/). This is a new physics engine built using [Rust](https://www.rust-lang.org/) (and also documented using [Docusaurus](https://docusaurus.io/) which this site uses as well). This looks like an amazing physics engine and something I certainly want to try. [AmmoJS](https://github.com/kripken/ammo.js/) has been great, but development on the Bullet physics engine has slowed down and I think Rapier will be a quality successor. Check out this [comparison on YouTube](https://www.youtube.com/watch?v=SOFUgOkuHW8). Right now, the only bottleneck I get during playback is from the Bullet physics simulation at around 400 dice which still isn't bad.

2. I would love to implement the sounds of dice rolling. I've been looking at other projects such as [Dice So Nice](https://gitlab.com/riccisi/foundryvtt-dice-so-nice) and BabylonJS's own physics imposter implementation to see how I could implement the `onCollideEvent` to trigger sounds. Then there might even be different sound packages similar to Dice So Nice

3. Special Effects. The great thing about having a 3D engine and digital dice is that the sky is the limit when it comes to effects. I would love to see exploding dice actually explode. I would like to see some sort of effect when critical roles are triggered. I'd also like to try to implement animated materials, such as water, or even animated dice, like clockwork steampunk dice with moving gears. Take a look at the [Pride dice set from D&D Beyond](https://www.dndbeyond.com/claim/dice/pride?icid_medium=ddb&icid_source=article&icid_campaign=dice-true-color&icid_content=claim-true-color). They get the idea.

4. An easy one to do would be to implement some simple post-processing in BabylonJS, such as motion blur, anti-aliasing, or other fun effects

5. On the "very near future" list is creating the [Genesys Dice](https://www.fantasyflightgames.com/en/news/2017/6/27/genesys/) set. The new theme system in version 1.0 allows for rolling and identifying dice beyond their number type. So creating the Genesys set should be a good test for the theme system's flexibility. It will probably involve creating a new parser that I'm hoping to do as a true "plug-in". Soon to be followed by [Legend of the Five Rings](https://www.fantasyflightgames.com/en/legend-of-the-five-rings-roleplaying-game/) which I also enjoy playing.

6. Also on the "very near future" list is an "additional dice" theme. I've got a set in the works that includes `d2`, `d14`, `d16`, `d18`, `d20`, `d24`, and `d30`. The modeling is almost complete. I still have to UV map everything which will be tricky. I really need to write a tutorial on how I make my themes from scratch.

7. I'd like to make a few more UI modules as well, such as:
    - __last "x" rolls__ - records the last few notations
    - __theme picker__ - an easy interface for switching up themes and theme color
    - __quick dice picker__ - similar to the dice table on Roll20
    - __die roll distribution__ - roll results are saved to the browsers IndexedDB and processed to produce distribution graphs
    - __favorite rolls__ - save a few frequently used notations
    - __notation builder__ - a simple touch based ui to build complex notation

Well, that's it for now. Wish me luck.