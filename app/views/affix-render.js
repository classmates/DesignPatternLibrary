import Ember from 'ember';

export default Ember.View.extend({
  affixRender: function () {
    Ember.run.schedule('afterRender', function () {
      $('.bs-docs-sidebar')
        .affix({
          offset: {
            top: 340,
            bottom: function () {
              return (this.bottom = $('.footer').outerHeight(true))
            }
          }
        }).find('a').on('click.docs.scrollTo', function (evt) {
          var sel = $(this).attr('href'),
            $target = $(sel);
          if($target.length>0) {
            $('html, body').animate({
              scrollTop: $target.offset().top
            }, 200);
          }
          evt.preventDefault();
        });
    });
  }.on('didInsertElement'),
  affixTearDown: function () {
    $('.bs-docs-sidebar').find('a').off('click.docs.scrollTo');
  }.on('willDestroyElement')
});
