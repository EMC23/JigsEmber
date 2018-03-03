import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('phaser', params.phaser_id),
    });
  },

  setupController(controller, models) {
    controller.set('phaser', models.phaser);
  },
});