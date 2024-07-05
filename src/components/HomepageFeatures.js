import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'High Performance',
    Img: '/img/icons/launch.svg',
    description: (
      <>
        Developed from the ground up with performance in mind. Using web workers, offscreen canvas rendering, WASM, and array buffers to speed everything up. Go ahead, roll hundreds of dice.
      </>
    ),
  },
  {
    title: 'Compact',
    Img: '/img/icons/package.svg',
    description: (
      <>
        Custom configured physics simulation engine (AmmoJS) and rendering engine (BabylonJS) in order to keep the JavaScript payload around 400k after compression. That's a full 3D environment with physics that runs in a browser! 
      </>
    ),
  },
  {
    title: 'Responsive',
    Img: '/img/icons/scalable.svg',
    description: (
      <>
        Designed to be responsive and perform great on mobile devices. Not only will the Dice-Box resize with the browser window, but you can also set the size of your dice in the configurations.
      </>
    ),
  },
  {
    title: 'Themable',
    Img: '/img/icons/unit.svg',
    description: (
      <>
        Variety is the spice of life. The theme system is flexible, enabling different 3D dice models, colors and skins. Every roll can have a different look. Comes pre-packed with HEX color support, but one can easily drop in <strong><a href="https://github.com/3d-dice/dice-themes" target="_blank">custom built themes</a></strong> for the look you want. 
      </>
    ),
  },
  {
    title: 'Easy Config',
    Img: '/img/icons/feature-list.svg',
    description: (
      <>
        Many of the physics and 3D environment <strong><a href="/docs/usage/config#configuration-options">parameters</a></strong> have been exposed for easy customization. Want to make the gravity five times stronger? Go right ahead. All parameters are easy to alter even after initializing the Dice-Box.
      </>
    ),
  },
  {
    title: 'Addon Support',
    Img: '/img/icons/box-solution.svg',
    description: (
      <>
        A few addons are already available at <strong><a href="https://github.com/3d-dice" target="_blank">3d-dice</a></strong> with more in the works. The results of the dice roller are formatted as a detailed JavaScript object. Addons can build on top of those results for any number of uses. Custom events provide convenient spots to tie into the action.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} alt={title} src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className={clsx('col col--12')}>
            <h2>Live Demo</h2>
            <p>Try it out for yourself!</p>
            <div id="dice-box">
              <iframe id="dice-demo" className={styles.diceDemo} src="https://d3rivgcgaqw1jo.cloudfront.net/index.html"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
