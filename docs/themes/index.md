---
sidebar_position: 1
---

# Themes
Everyone loves different dice colors and styles. Also, sometimes it's important to have different colored dice at the virtual table in order to distinguish who's making rolls. With that in mind I've tried to keep the theme layer flexible and easy to customize.

## How themes work
Themes should be located in the `/public/assets/themes` folder. Dice-Box only comes with the `default` theme. Additional themes can be downloaded or installed from [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes/tree/main/themes). Themes have been designed to be easy drop-in addons. Inside a theme folder is a `package.json` file used by npm, a `theme.config.json` file, a couple of texture files, and possibly a json file for the 3D models used by this theme. 

The folder name for a theme must match the `systemName` parameter in the `theme.config.json` file.

:::info Copying theme files
If you use npm to install a theme, then you must manually copy the theme to your static assets folder. 

Theme can also be downloaded as a `.zip` file from the [dice-themes/downloads](https://github.com/3d-dice/dice-themes/tree/main/downloads) folder.
:::

## Extended themes
Some themes are design to add more options to other themes. For instance, when you'd like to add more dice types to a set. These themes are identified by the `extends` parameter in the `theme.config.json` file.

For example, [Default Extras](/docs/themes/defaultExtras) is a theme that extends the Default theme. It adds a `d2`, `dfate` and `dpip` to the default dice available. They may then be called with other default dice using standard notation such as  `diceBox.roll(['2d2', '2d6'])`.

If you assign an theme extension to the `config.theme` option, the extension and the theme it targets will both be loaded and `config.theme` will be set to the target's `systemName`.

You cannot extend a theme that extends another theme. You can extend a target theme multiple times.

:::info Naming Practices
A theme extension will follow the naming pattern of `{target theme name}-{extension name}`. For example `default-extras` or `diceOfRolling-fate`
:::

## Theme Limitations
It's important to know that Dice-Box currently only loads the `StandardMaterial` and `CustomMaterial` libraries from BabylonJS. _PBR_ materials are not currently supported due to the high overhead it has. It's also important to know that BabylonJS expects normal maps to be __DirectX formatted__. If you have OpenGL normal maps then you'll want to invert the `red` and `green` color channels of the file (using image editing software like [Affinity Photo](https://affinity.serif.com/en-gb/photo/)) to convert it to DirectX.

## Sharing mesh files
For distribution reasons, themes from [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes/tree/main/themes) include their required 3D models, but if you're using multiple themes that load the same model file, then you can put that shared file in the `/public/assets/models` folder. After that, update the `meshFile` path in the `theme.config.json` files as necessary. For example
```javascript
  meshFile: "../../models/gemstone.json",
```
The mesh files can be large in size. Sharing the meshes will save some bandwidth and memory.

:::info Creative Commons 0
The 3D models and textures available in the [@3d-dice/dice-box](https://github.com/3d-dice/dice-box) and [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes) projects are licensed as CC0 content.
In summary, CC0 says,  
>"To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty."

What this means is that these assets are free to be used and distributed by anyone in public or commercial products.

See also [http://creativecommons.org/publicdomain/zero/1.0/](http://creativecommons.org/publicdomain/zero/1.0/)
:::

## Custom themes

Custom themes are possible, but it can be a difficult process. If you are interested in converting a 3D dice set into playable dice in Dice Box, please [log an issue on GitHub](https://github.com/3d-dice/dice-box/issues) and I'll see if I can assist.
