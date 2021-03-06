// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bloody Book Club',
  tagline: "Be like Nietzsche. Don't be like Freud",
  url: 'https://bloodybookclub.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bloodybookclub', // Usually your GitHub org/user name.
  projectName: 'bloodybookclub', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Bloody Book Club Blog',
            description: 'Der Blog des Bloody Book Clubs als RSS Feed',
            copyright: 'Copyright © ${new Date().getFullYear()} Bloody Book Club.',
          }
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
        title: 'Startseite',
        logo: {
          alt: 'Bloody book club Logo',
          src: 'img/blood.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/ueber-uns', label: 'Über uns', position: 'left'},
          {
            href: 'https://github.com/bloodybookclub/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mehr',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bloodybookclub/website',
              },
              {
                label: 'Impressum',
                to: '/impressum',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bloody Book Club.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
