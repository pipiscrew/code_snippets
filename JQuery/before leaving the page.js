//https://stackoverflow.com/a/21061009/1320686
$('#form').data('serialize',$('#form').serialize()); // On load save form current state

$(window).bind('beforeunload', function(e){
    if($('#form').serialize()!=$('#form').data('serialize'))return true;
    else e=null; // i.e; if form state change show warning box, else don't show it.
});