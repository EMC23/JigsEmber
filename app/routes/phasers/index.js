import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      phasers:  this.store.query('phaser', {

        filter: {}
      }),
    });
  },

  setupController(controller, models) {
    controller.set('phasers', models.phasers);
  },


  setupController(controller, models) {
    controller.set('node--phaser', models.phasers);
  }



});



