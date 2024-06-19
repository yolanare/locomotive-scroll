// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Locomotive Scroll Documentation',
  tagline: 'Detection of elements in viewport & smooth scrolling with parallax effects.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },  
      navbar: {
        title: 'Locomotive Scroll',
        items: [
          {
            href: 'https://scroll.locomotive.ca/demo/',
            label: 'Demo',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
              {
                label: 'Documentation',
                to: '/category/documentation',
              },
            ],
          },
          {
            title: 'About us',
            items: [
              {
                href: 'https://locomotive.ca',
                label: 'Website',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/locomotivemtl/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/locomotive-mtl/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://scroll.locomotive.ca/demo/',
                label: 'Demo',
              },
              {
                href: 'https://github.com/facebook/docusaurus',
                label: 'GitHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Locomotive Scroll`,
      },
      prism: {
        theme: prismThemes.vsDark,
      },
    }),
};

export default config;
