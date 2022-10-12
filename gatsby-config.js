module.exports = {
  siteMetadata: {
    title: 'Cloud Pak for Template',
    description: 'Cookbook for Cloud Pak for Pak_Name',
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
        'https://github.ibm.com/ibmdemos-cloudpaks/cloudpak-template',
      subDirectory: '/',
    },
  },
}
],
pathPrefix: "/ibmdemos-cloudpaks/cloudpak-template",
};
