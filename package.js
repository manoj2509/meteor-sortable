// Package metadata file for Meteor.js
'use strict';

var packageName = 'manoj2509:sortable';  // https://atmospherejs.com/rubaxa/sortable
var gitHubPath = 'RubaXa/Sortable';  // https://github.com/RubaXa/Sortable
var npmPackageName = 'sortablejs';  // https://www.npmjs.com/package/sortablejs - optional but recommended; used as fallback if GitHub fails

// Now that we finally have an accurate version number...
Package.describe({
  name: packageName,
  summary: 'Sortable: reactive minimalist reorderable drag-and-drop lists on modern browsers and touch devices',
  version: '1.4.2',
  git: 'https://github.com/manoj2509/meteor-sortable.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use('templating', 'client');
  api.use('dburles:mongo-collection-instances@0.3.4');  // to watch collections getting created
  api.export('Sortable');  // exported on the server too, as a global to hold the array of sortable collections (for security)
  api.addFiles([
    'Sortable.js',
    'template.html',  // the HTML comes first, so reactivize.js can refer to the template in it
    'reactivize.js'
  ], 'client');
  api.addFiles('methods-client.js', 'client');
  api.addFiles('methods-server.js', 'server');
});

Package.onTest(function (api) {
  api.use(packageName, 'client');
  api.use('tinytest', 'client');

  api.addFiles('test.js', 'client');
});
