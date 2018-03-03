import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      pages:  this.store.query('page', {
        sort: "-createdAt",
        page: {
          limit: 30,
        },
        filter: {}
      }),
    });
  },

  setupController(controller, models) {
    controller.set('pages', models.pages);
  }
});
