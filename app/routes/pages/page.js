import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.RSVP.hash({
      recipe: this.store.findRecord('page', params.page_id),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  },
});