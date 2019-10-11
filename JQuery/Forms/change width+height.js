//http://stackoverflow.com/a/25859829
//example - http://jsbin.com/yefas/1

//tested bootstrap3

//This is the default modal css for 768px and up:
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
}

//They have a class modal-lg for larger widths
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}

//If you need something twice the 600px size, and something fluid, do something like this in your CSS after the Bootstrap css and assign that class to the modal-dialog.
@media (min-width: 768px) {
  .modal-xl {
    width: 90%;
   max-width:1200px;
  }
}

//HTML
<div class="modal-dialog modal-xl">


//ex. replace normal "modal-dialog" with xl
<div class="modal fade" id="modalOFFER_ADVERTISE_DETAILS" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<!--<div class="modal-dialog">-->
<div class="modal-dialog modal-xl">