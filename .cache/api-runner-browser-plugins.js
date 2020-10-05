module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-107339411-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Eric Flatt - Portfolio","short_name":"Eric","description":"Eric Flatt - Portfolio","start_url":"/","background_color":"#a0d8f1","theme_color":"#e07628","display":"standalone","icon":"src/pages/img/eFavicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"97e02a6bf8350baa92cb66991bb378a0"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
