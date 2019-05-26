import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('queries', function() {});
  this.route('mutations', function() {});
  this.route('enums', function() {});
  this.route('scalars', function() {});
  this.route('inputs', function() {});
  this.route('objects', function() {});
  this.route('interfaces', function() {});
  this.route('unions', function() {});
  this.route('directives', function() {});
});

export default Router;
