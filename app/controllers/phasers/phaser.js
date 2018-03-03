import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        latestRecipes(param) {
            return this.get('store').query('phasers', {
                sort: "-updatedAt",
                sortAscending: false,
                category: param,

            });
        },

      filterByCategory(param) {
        if (param !== '') {
          return this.get('store').query('recipe', {
            filter: {
              'category.name': { value: param}
            }

          });
        }
      }
    }

});
