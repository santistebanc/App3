App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  this.resource('users');
});

App.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("user");
  }
});
