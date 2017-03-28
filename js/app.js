$("#removeDiv").click(function(){
  $("#remove").remove();
});

$( "#setText" ).keyup(function(){
var value = $(this).val();
$("#needText").text(value);
})
