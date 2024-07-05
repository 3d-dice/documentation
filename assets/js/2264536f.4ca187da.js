"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6789],{1315:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"1.0.14","label":"1.0.14","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.0.14","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Intro","href":"/docs/1.0.14/intro","docId":"intro","unlisted":false},{"type":"category","label":"Usage","items":[{"type":"link","label":"Getting Started","href":"/docs/1.0.14/usage/config","docId":"usage/config","unlisted":false},{"type":"link","label":"Common Objects","href":"/docs/1.0.14/usage/objects","docId":"usage/objects","unlisted":false},{"type":"link","label":"Methods","href":"/docs/1.0.14/usage/methods","docId":"usage/methods","unlisted":false},{"type":"link","label":"Callbacks","href":"/docs/1.0.14/usage/callbacks","docId":"usage/callbacks","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"link","label":"Themes","href":"/docs/1.0.14/themes","docId":"themes","unlisted":false},{"type":"category","label":"Addons","items":[{"type":"link","label":"About Addons","href":"/docs/1.0.14/addons/","docId":"addons/index","unlisted":false},{"type":"link","label":"Dice Parser Interface","href":"/docs/1.0.14/addons/parser","docId":"addons/parser","unlisted":false},{"type":"link","label":"Advanced Roller","href":"/docs/1.0.14/addons/advRoller","docId":"addons/advRoller","unlisted":false},{"type":"link","label":"Dice Picker","href":"/docs/1.0.14/addons/dicePicker","docId":"addons/dicePicker","unlisted":false},{"type":"link","label":"Display Results","href":"/docs/1.0.14/addons/displayResults","docId":"addons/displayResults","unlisted":false},{"type":"link","label":"Box Controls","href":"/docs/1.0.14/addons/boxControls","docId":"addons/boxControls","unlisted":false},{"type":"link","label":"Module Ideas","href":"/docs/1.0.14/addons/ideas","docId":"addons/ideas","unlisted":false}],"collapsed":true,"collapsible":true}],"changelog":[{"type":"link","label":"Release Notes","href":"/docs/1.0.14/changelog/","docId":"changelog/index","unlisted":false},{"type":"link","label":"Version 1.0","href":"/docs/1.0.14/changelog/version-1.0","docId":"changelog/version-1.0","unlisted":false},{"type":"link","label":"Version 0.6","href":"/docs/1.0.14/changelog/version-0.6","docId":"changelog/version-0.6","unlisted":false},{"type":"link","label":"Version 0.5","href":"/docs/1.0.14/changelog/version-0.5","docId":"changelog/version-0.5","unlisted":false},{"type":"link","label":"Version 0.4","href":"/docs/1.0.14/changelog/version-0.4","docId":"changelog/version-0.4","unlisted":false}]},"docs":{"addons/advRoller":{"id":"addons/advRoller","title":"Advanced Roller","description":"The Advanced Roller module is a part of the @3d-dice/dice-ui package. This UI module provides a simple text input field and a clear button. The field is connect to Dice Parser Interface. On submit, the field will send the roll notation to FDP to be parsed and will return the result to the callback onSubmit. The clear button will clear out any values stored in the parser and invokes the onClear callback, which is usually a good place to clear your dice-box as well.","sidebar":"docs"},"addons/boxControls":{"id":"addons/boxControls","title":"Box Controls","description":"Box Controls uses the popular dat.GUI module which is self described as:","sidebar":"docs"},"addons/dicePicker":{"id":"addons/dicePicker","title":"Dice Picker","description":"This is a simple UI module aimed at making picking dice simple and easy. I put this module together mostly to make setting up simple rolls on mobile devices easy. Just tap away at the dice you want to roll. It\'s very similar in nature to Advanced Roller.","sidebar":"docs"},"addons/displayResults":{"id":"addons/displayResults","title":"Display Results","description":"Another module available as part of the @3d-dice/dice-ui package. This module takes the final result object as input and creates a modal popup window displaying the final roll results and the final value of that roll.","sidebar":"docs"},"addons/ideas":{"id":"addons/ideas","title":"Module Ideas","description":"","sidebar":"docs"},"addons/index":{"id":"addons/index","title":"About Addons","description":"In this project I refer to addons as JavaScript modules that can be used with Dice-Box. So far I\'ve created four modules that are designed to integrate with Dice-Box. More are planned and I certainly encourage others to build their own.","sidebar":"docs"},"addons/parser":{"id":"addons/parser","title":"Dice Parser Interface","description":"As mentioned in the config setup, Dice-Box requires a parser to do the fun things. Any roll notations that are more than the simple pattern d{side}+/-{modifier} have to go through a parser to make sense of the notation. All the rolls supported are documented at Roll20 Dice Specification","sidebar":"docs"},"changelog/index":{"id":"changelog/index","title":"Release Notes","description":"When I started this project I wasn\'t sure how or when I was going to release it publicly. It was mostly a push to get features working. However, now that it\'s almost ready to go to version 1.0 I see the need to capture more project documentation and changelogs. I will try to backfill older changelogs when I have time.","sidebar":"changelog"},"changelog/version-0.4":{"id":"changelog/version-0.4","title":"Version 0.4","description":"Stub","sidebar":"changelog"},"changelog/version-0.5":{"id":"changelog/version-0.5","title":"Version 0.5","description":"Stub","sidebar":"changelog"},"changelog/version-0.6":{"id":"changelog/version-0.6","title":"Version 0.6","description":"Stub","sidebar":"changelog"},"changelog/version-1.0":{"id":"changelog/version-1.0","title":"Version 1.0","description":"Stub","sidebar":"changelog"},"intro":{"id":"intro","title":"Intro","description":"Do you love TTRPG and wish you had some 3D dice to incorporate into your side projects? That\'s exactly why I started this project. This is a high performance 3D dice roller made with BabylonJS, AmmoJS and implemented with lightning fast web workers and offscreenCanvas. Designed to be easy to integrate into your own JavaScript app with a package payload under 1 megabyte after compression.","sidebar":"docs"},"themes":{"id":"themes","title":"Themes","description":"Everyone loves different dice colors and styles. Also, sometimes it\'s important to have different colored dice at the virtual table in order to distinguish who\'s making rolls. With that in mind I\'ve tried to keep the theme layer flexible and easy to customize.","sidebar":"docs"},"usage/callbacks":{"id":"usage/callbacks","title":"Callbacks","description":"onDieComplete","sidebar":"docs"},"usage/config":{"id":"usage/config","title":"Getting Started","description":"It should be noted that Dice-Box can only accept simple dice notations or notation objects such as 2d20 or . Once the notation has been sent to Dice-Box using the roll method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit.","sidebar":"docs"},"usage/methods":{"id":"usage/methods","title":"Methods","description":"Promised based rolls","sidebar":"docs"},"usage/objects":{"id":"usage/objects","title":"Common Objects","description":"Roll Object","sidebar":"docs"},"versions":{"id":"versions","title":"Versions","description":"- 1.0"}}}}')}}]);