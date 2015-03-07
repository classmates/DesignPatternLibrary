import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about", function() {});
  this.route("css", function() {});
  this.route("javascript", function() {});
  this.route("getting-started", function() {});
  this.route("dpl-components", function() {});
});

export default Router;
