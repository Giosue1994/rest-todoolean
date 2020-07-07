$(document).ready(function() {

  getTodoList();

  // quando scrivo sull'input e premo il tato Inserisci
  // aggiungo un nuovo elemento alla lista
  $('.add-item').click(function() {

    var textItem = $('.text-item').val();
    printList(textItem);
    updateList(textItem);
    
  });

});

//////////////////////////////////////////////////////
// FUNZIONE OTTIENI ELEMENTI LISTA
function getTodoList() {
  $.ajax(
    {
      url: 'http://157.230.17.132:3016/todos',
      method: 'GET',

      success: function(data) {

        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          printList(item.text);
        }

      },

      error: function() {
        console.log('Errore');
      }
    }
  );
};

//////////////////////////////////////////////////////
// FUNZIONE MODIFICA LISTA
function updateList(item) {
  $.ajax(
    {
      url: 'http://157.230.17.132:3016/todos',
      method: 'POST',
      data: {
        text: item
      },

      success: function(data) {

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
