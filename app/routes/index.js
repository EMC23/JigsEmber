import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
      this.replaceWith('pages');
  },

  model() {
    return Ember.RSVP.hash({
      tags: this.store.findAll('tag'),
      phasers: this.store.findAll('phaser'),
      categories: this.store.findAll('category'),
      pages: this.store.findAll('page'),
      recipes:  this.store.query('recipe', {
        sort: "-createdAt",
        page: {
          limit: 30,
        },
        filter: {}
      }),
    });
  },

  setupController(controller, models) {
    controller.set('tags', models.tag);
    controller.set('pages', models.pages);
    controller.set('recipes', models.recipes);
  },

});