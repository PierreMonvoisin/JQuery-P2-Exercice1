$("#dialog").dialog({
  autoOpen : false, modal : true, show : "blind", hide : "blind"
});
$("#contactUs").click(function() {
  $("#dialog").dialog("open");
  return false;
});
