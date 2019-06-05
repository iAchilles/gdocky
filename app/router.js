import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('queries', function() {});
  this.route('mutations', function() {});
  this.route('enums', function() {
      this.route('enum', { path: '/:name' });
  });
  this.route('scalars', function() {
      this.route('scalar', { path: '/:name' });
  });
  this.route('inputs', function() {
      this.route('input', { path: '/:name' });
  });
  this.route('objects', function() {
    this.route('object', { path: '/:name' });
  });
  this.route('interfaces', function() {
      this.route('interface', { path: '/:name' });
  });
  this.route('unions', function() {
      this.route('union', { path: '/:name' });
  });
  this.route('directives', function() {});
});

export default Router;
