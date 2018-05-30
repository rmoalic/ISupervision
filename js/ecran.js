$(function() {
  
  // Set the command-line prompt to include the user's IP Address
  $('.prompt').html('[Gérard@Supervision] # ');

  // Initialize a new terminal object
  var term = new Terminal('#input-line .cmdline', '#container output');
  term.init();
})