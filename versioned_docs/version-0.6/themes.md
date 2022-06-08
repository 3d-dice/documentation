---
sidebar_position: 3
---

# Themes
Everyone loves different dice colors and styles. Also, sometimes it's important to have different colored dice at the virtual table in order to distinguish who's making rolls. With that in mind I've tried to keep the theme layer flexible and easy to customize.

## How themes work
Themes are located in the `/public/assets/dice-box/themes` folder currently. The themes you want to use must be copied over to your static assets folder. In the folders are a couple of texture files. It's important to know that Dice-Box currently only loads the `StandardMaterial` and `CustomMaterial` librarys from BabylonJS. PBR materials are not currently supported due to the high overhead it has. 

Standard materials will have two textures named `albedo.jpg` (the diffuse texture) and `normal-dx.jpg` (the bump map texture). For reasons I'm still trying to work out, DirectX style normals maps have to be used currently. BabylonJS changed some parameters in it's version 5 code that flipped the maps from OpenGl style to DirectX. Anywhoosle, these are the only two textures currently used by the theme system.

There is another theme named `transparent` which is loaded by the `CustomMaterial` shader. This is used by HEX color themes. The transparent part of this theme are two transparent `.png` files that only have the face numbers on them. The custom shader will assign the specified HEX value as the material's base color. Then, based on color value, it will pick either the light numbers or the dark numbers to apply overtop of the base color.

## How to make a custom theme
Right now there are some complex limitations to rolling new themes. The theme system will be reworked in the near future to make creating them easier and to offer greater flexibility, including bringing your own 3D models.

If you want to make your own theme today then there are two approches possible. 
1. The first approach is to duplicate any standard material theme folder and use image editing software like [Affinity Photo](https://affinity.serif.com/en-gb/photo/) to skew the colors or make changes as best you can. Also available are the `.png` files in the transparent theme if you need to reapply the dice numbers over top of any color changes you make. Once done, if the folder is in the same directory as the other themes, you should be able to set the Dice-Box theme to the name of the folder you created.

:::info Helpful Videos
 * [Generating Normal Maps in Photoshop](https://www.youtube.com/watch?v=0EHljiUMRA4&t=54s)
 * [Combining Normal Maps in Photoshop](https://www.youtube.com/watch?v=t8jvroWSCBU)
 * [Free Web Based Normal Map Generator](https://cpetry.github.io/NormalMap-Online/)
:::

2. The second approach is to bake your own textures using the original 3D models. This is the only way to create new seemless textures. Start by purchasing a copy of the 3D dice I've used for this application [available here](https://sketchfab.com/3d-models/rpg-dice-set-pbr-game-ready-model-962812cf911545d5a47edea469cfc54e) for $6.99. Once you have the model `.gltf` files, you can import the model into a program like [Blender](https://www.blender.org/) to bake your own procedural textures. There are a couple of youtube videos available that demonstrate how this can be done. You may have to reapply the dice numbers from the transparent theme after baking new textures.

:::info Helpful Videos
 * [Baking Textures](https://www.youtube.com/watch?v=LLQFopN--LY)
 * [Baking Multiple Materials](https://www.youtube.com/watch?v=wG6ON8wZYLc)
 * [Texture Painting](https://www.youtube.com/watch?v=AnRQhH3fEDY)
 * [How to Manage Material Libraries](https://www.youtube.com/watch?v=CdYz9oLuAOI)
:::

