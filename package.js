Package.describe({
  name: 'dverba:sidekiq',
  version: '0.0.2',
  summary: 'a simple meteorite package, providing a wrapper for the node-sidekiq',
  git: 'https://github.com/dplakhov/meteor-sidekiq.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  if (api.export) {
    api.export('Sidekiq');
  }
  api.versionsFrom('1.1.0.2');
  api.addFiles('sidekiq.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dverba:sidekiq');
  api.addFiles('sidekiq-tests.js');
});

Npm.depends({
  hiredis: '0.1.15',
  redis: '0.12.1',
  sidekiq: '1.1.1'
});
