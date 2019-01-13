module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "assets/css/**/*.{js,css,svg,png,xml}",
    "assets/icons/*.{svg,png,xml}",
    "assets/media/*.{svg,png,jpg,jpeg}",
    "**/*.html",
    "manifest.json",
    "favicon.ico"
  ], 
  "globIgnores": [
    "/workbox-config.js",
    'node_modules/**/*',
    "**/test*"
  ],
  "swSrc": "_layouts/sw.js",
  "swDest": "sw.js"
};
