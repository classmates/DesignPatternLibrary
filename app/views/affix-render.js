import Ember from 'ember';

export default Ember.View.extend({
  affixRender: function () {
    var _self = this;
    Ember.run.schedule('afterRender', function () {
      _self.$('.bs-docs-sidebar')
        .affix({
          offset: {
            top: 340,
            bottom: function () {
              return (this.bottom = _self.$('.footer').outerHeight(true));
            }
          }
        }).find('a').on('click.docs.scrollTo', function (evt) {
          var sel = _self.$(this).attr('href'),
            $target = Ember.$(sel);
          if($target.length>0) {
            Ember.$('html, body').animate({
              scrollTop: $target.offset().top
            }, 200);
          }
          evt.preventDefault();
        });
    });
  }.on('didInsertElement'),
  affixTearDown: function () {
    this.$('.bs-docs-sidebar').find('a').off('click.docs.scrollTo');
  }.on('willDestroyElement')
});
