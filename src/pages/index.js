import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* <iframe id="bg-dice" className={styles.bgDice} src="https://m6otm.csb.app/"></iframe> */}
      {/* <iframe className={styles.bgDice} src="https://d3rivgcgaqw1jo.cloudfront.net/index.html"></iframe> */}
      {/* <iframe src="https://codesandbox.io/embed/fantastic-3d-dice-m6otm?autoresize=1&fontsize=14&theme=dark&view=preview"
        className={styles.bgDice}
        style={{width:'100%', height:'500px', border:0, borderRadius: '4px', overflow:'hidden'}}
        title="fantastic-3d-dice"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe> */}
      <iframe id="bg-dice" className={styles.bgDice} src="https://d3rivgcgaqw1jo.cloudfront.net/demos/dice-fountain.html"></iframe>

      <div className={clsx('container', styles.heroBannerText)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
