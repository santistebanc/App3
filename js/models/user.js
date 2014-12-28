App.User = DS.Model.extend({
  name: DS.attr("string"),
  favcolor: DS.attr("string"),
});

App.User.reopenClass({
  FIXTURES: [
{
  id: 1,
  name: "Juan",
  favcolor: "blue"
}
]
});
