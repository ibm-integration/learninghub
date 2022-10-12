module.exports = {
  siteMetadata: {
    title: 'Integration Learning Hub',
    description: 'Single point of access for Integration Learning material',
    keywords: 'ibm,mcm,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',

{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://github.ibm.com/ibm-integration/learninghub',
      subDirectory: '/',
    },
  },
}
],
pathPrefix: "/learninghub",
};
