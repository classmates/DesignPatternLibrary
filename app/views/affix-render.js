import Ember from 'ember';

export default Ember.View.extend({
  affixRender: function () {
    Ember.run.schedule('afterRender', function () {
      $('.bs-docs-sidebar').affix({
        offset: {
          top: 340,
          bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true))
          }
        }
      });
    });
  }.on('didInsertElement')
});
