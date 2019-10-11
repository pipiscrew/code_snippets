//http://stackoverflow.com/a/10040368


var printCustom = function() {
//before print
    $("body").css('background','#ffffff');
 
    window.print();
 
//after print
    $("body").css('background','#1c1c1c');
}
 
 function do_print()
 {
        printCustom();
 }