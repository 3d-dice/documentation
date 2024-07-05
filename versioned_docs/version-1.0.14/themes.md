---
sidebar_position: 3
---

# Themes
Everyone loves different dice colors and styles. Also, sometimes it's important to have different colored dice at the virtual table in order to distinguish who's making rolls. With that in mind I've tried to keep the theme layer flexible and easy to customize.

## How themes work
Themes should be located in the `/public/assets/themes` folder. Dice-Box only comes with the `default` theme. Additional themes can be downloaded or installed from [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes/tree/main/themes). Themes have been designed to be easy drop-in addons. Inside a theme folder is a `package.json` file used by npm, a `theme.config.json` file, a couple of texture files, and possibly a json file for the 3D models used by this theme. 

The folder name for a theme must match the `systemName` parameter in the `theme.config.json` file.

:::info Using NPM
If you use npm to install a theme, then you must manually copy the theme to your static assets folder.
:::

It's important to know that Dice-Box currently only loads the `StandardMaterial` and `CustomMaterial` libraries from BabylonJS. _PBR_ materials are not currently supported due to the high overhead it has. It's also important to know that BabylonJS expects normal maps to be __DirectX formatted__. If you have OpenGL normal maps then you'll want to invert the `red` and `green` color channels of the file (using image editing software like [Affinity Photo](https://affinity.serif.com/en-gb/photo/)) to convert it to DirectX.

For distribution reasons, themes from [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes/tree/main/themes) include their required 3D models, but if you're using multiple themes that load the same model file, then you can put that shared file in the `/public/assets/models` folder. After that, update the `meshFile` path in the `theme.config.json` files as necessary. For example
```javascript
  meshName: "gemstone",
  meshFile: "../../models/gemstone.json",
```

:::info Creative Commons 0
The 3D models and textures available in the [@3d-dice/dice-box](https://github.com/3d-dice/dice-box) and [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes) projects are licensed as CC0 content.
In summary, CC0 says,  
>"To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty."

What this means is that these assets are free to be used and distributed by anyone in public or commercial products.

See also [http://creativecommons.org/publicdomain/zero/1.0/](http://creativecommons.org/publicdomain/zero/1.0/)
:::

## How to make a custom theme

If you want to make your own textures today then there are two approaches possible. 
1. The first approach is to duplicate any standard material theme folder and use image editing software like [Affinity Photo](https://affinity.serif.com/en-gb/photo/) to skew the colors or make changes as best you can. Also available are the `.png` files in the default theme if you need to reapply the dice numbers over top of any color changes you make. Once done, update the `theme.config.json` file as necessary. You could even point the `bumpTexture` and `meshFile` paths back to the original theme if you don't want to duplicate them.

:::info Helpful Videos
 * [Generating Normal Maps in Photoshop](https://www.youtube.com/watch?v=0EHljiUMRA4&t=54s)
 * [Combining Normal Maps in Photoshop](https://www.youtube.com/watch?v=t8jvroWSCBU)
 * [Free Web Based Normal Map Generator](https://cpetry.github.io/NormalMap-Online/)
:::

2. The second approach is to bake your own textures using the original 3D models. This is the only way to create new seamless textures. Start by downloading the 3D dice I've used for this application [available here](https://github.com/3d-dice/dice-themes/models/). Once you have the `.blend` files, you can open them in [Blender](https://www.blender.org/) to bake your own procedural textures. There are a couple of youtube videos available that demonstrate how this can be done. 

:::info Helpful Videos
 * [Baking Textures](https://www.youtube.com/watch?v=LLQFopN--LY)
 * [Baking Multiple Materials](https://www.youtube.com/watch?v=wG6ON8wZYLc)
 * [Texture Painting](https://www.youtube.com/watch?v=AnRQhH3fEDY)
 * [How to Manage Material Libraries](https://www.youtube.com/watch?v=CdYz9oLuAOI)
:::

## How to make new dice models

*Coming soon
