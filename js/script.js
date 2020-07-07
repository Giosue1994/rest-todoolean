$(document).ready(function() {
  getTodoList();
});

//////////////////////////////////////////////////////
// FUNZIONE OTTIENI ELEMENTI LISTA
function getTodoList() {
  $.ajax(
    {
      url: 'http://157.230.17.132:3016/todos',
      method: 'GET',

      success: function(data) {

        for (var key in data) {
          printList(data[key].text);
        }

      },

      error: function() {
        console.log('Errore');
      }
    }
  );
};

//////////////////////////////////////////////////////
// FUNZIONE STAMPA ELEMENTI LISTA
function printList(item) {
  var source = $("#item-template").html();
  var template = Handlebars.compile(source);

  var context = {
    text: item
  };

  var html = template(context);

  $('.list-items').append(html);
};
