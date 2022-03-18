// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/* @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fantastic Dice',
  tagline: '3D dice to level up your fun',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '3d-dice', // Usually your GitHub org/user name.
  projectName: 'Fantastic Dice', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fantastice Dice',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                to: '/docs/intro',
              },
              {
                label: 'Usage',
                to: '/docs/usage/config',
              },
              {
                label: 'Methods',
                to: '/docs/usage/methods',
              },
              {
                label: 'Callbacks',
                to: '/docs/usage/callbacks',
              },
            ],
          },
          {
            title: 'Themes',
            items: [
              {
                label: 'The Theme Layer',
                to: '/docs/themes',
              },
              {
                label: 'Custom Themes',
                to: '/docs/themes#how-to-make-a-custom-theme',
              },
            ],
          },
          {
            title: 'Addons',
            items: [
              {
                label: 'Fantastic Dice Parser',
                to: '/docs/addons/parser',
              },
              {
                label: 'Advanced Roller',
                to: '/docs/addons/advRoller',
              },
              {
                label: 'Dice Picker',
                to: '/docs/addons/dicePicker',
              },
              {
                label: 'Display Results',
                to: '/docs/addons/displayResults',
              },
              {
                label: 'Box Controls',
                to: '/docs/addons/boxControls',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Release Notes',
                to: '/releaseNotes',
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
