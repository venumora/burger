$(document).ready(function() {
  $(document).unbind('click').on('click', '.js-devour-it', function(event) {
    const key = $(event.currentTarget).attr('data-key');
    const data = {id: parseInt(key, 10), devoured: 1};

    $.ajax({
      type: 'POST',
      url: '/burgers/update/devoured',
      data: data,
      success: function(){
          location.reload();
      }
    });
  });
});

module.exports.register = function(Handlebars, options) {
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });
};