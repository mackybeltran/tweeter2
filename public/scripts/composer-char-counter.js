// A $( document ).ready() block.
$( document ).ready(function() {
    $( "textarea" ).keypress(function() {
  console.log(this);
  });
});