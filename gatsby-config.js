module.exports = {
  siteMetadata: {
    title: `Jinshuju Design Guidence`,
    siteUrl: 'https://jinshuju.design'    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'packages',
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`
  ]
};
