// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const jargon = require('remark-jargon')
const terms = require('./terms.js')

/* @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fantastic Dice',
  tagline: '3D dice to level up your fun',
  url: 'https://fantasticdice.games',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '3d-dice', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0',
            }
          },
          beforeDefaultRemarkPlugins: [
            [jargon, {jargon: terms}]
          ]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/3d-dice/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-4WD1G10LZL'
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: '3D, dice, RPG, TTRPG, simulated, 3d-dice, d20, game'},
        {property:"og:site_name", content:"Fantastic Dice"},
        {property: 'og:image', content: 'https://fantasticdice.games/img/fantasticScreenshot.jpg'},
        {property: 'og:image:alt', content: 'Fantastic Dice Homepage'},
        {property: 'og:type', content: 'article'},
        {name:"twitter:card", value:"summary_large_image"},
      ],
      navbar: {
        title: 'Fantastice Dice',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {to: 'docs/intro', label: 'Docs', position: 'left'},
          {to: 'blog', label: 'Blog', position: 'left'},
          {to: 'docs/changelog', label: 'Changelog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: 'docs/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/3d-dice',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: 'docs/intro',
              },
              {
                label: 'Usage',
                to: 'docs/usage/config',
              },
              {
                label: 'Methods',
                to: 'docs/usage/methods',
              },
              {
                label: 'Callbacks',
                to: 'docs/usage/callbacks',
              },
            ],
          },
          {
            title: 'Themes',
            items: [
              {
                label: 'The Theme Layer',
                to: 'docs/themes',
              },
              {
                label: 'Custom Themes',
                to: 'docs/themes#how-to-make-a-custom-theme',
              },
            ],
          },
          {
            title: 'Addons',
            items: [
              {
                label: 'Dice Parser Interface',
                to: 'docs/addons/parser',
              },
              {
                label: 'Advanced Roller',
                to: 'docs/addons/advRoller',
              },
              {
                label: 'Dice Picker',
                to: 'docs/addons/dicePicker',
              },
              {
                label: 'Display Results',
                to: 'docs/addons/displayResults',
              },
              {
                label: 'Box Controls',
                to: 'docs/addons/boxControls',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'Release Notes',
                to: 'docs/changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/3d-dice',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Frank Ali. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
