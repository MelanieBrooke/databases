// var request = require('request');

var Messages = {
  fetch: function() {
    Parse.readAll((data) => {
      console.log('chatterbox: Messages retrieved');
      MessagesView.$chats.empty();
      console.log('data: ', data);
      for (message of data) {
        MessagesView.renderMessage(message);
      }
    });
  },
  // create a set method that adds a message to our database
  set: function(message) {
    // invoke Parse.create with the message object as an argument
    Parse.create(message, (data) => {
      console.log('chatterbox: Message sent');
      Messages.fetch();
    });
  }

};


