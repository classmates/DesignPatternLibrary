/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: false
  },
  lessOptions: {
    sourceMap: true,
    paths: [
      'bower_components/bootstrap/less'
    ]
  }
});

app.import('bower_components/bootstrap/dist/js/cm-bootstrap.min.js');
app.import('bower_components/bootstrap/dist/css/cm-bootstrap.css');
app.import('bower_components/bootstrap/dist/css/cm-bootstrap-theme.css');
app.import('bower_components/bootstrap/dist/css/cm-bootstrap-theme.css.map', {
  destDir: 'assets'
});
app.import('bower_components/bootstrap/less/cmo/cm-variables.less');
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//module.exports = app.toTree();
// incorporate cm-Bootstrap fonts, and put them in the CSS reference location
var pickFiles = require('broccoli-static-compiler'),
  mergeTrees = require('broccoli-merge-trees'),
  bootstrapFonts = pickFiles('bower_components/bootstrap/dist/fonts/', {
    srcDir: '/',
    destDir: '/fonts'
  }),
  cmTheme = pickFiles('bower_components/bootstrap/dist/css/', {
    files: ['cm-bootstrap-theme.min.css'],
    srcDir: '/',
    destDir: '/assets'
  });

module.exports = mergeTrees([app.toTree(), bootstrapFonts, cmTheme]);
