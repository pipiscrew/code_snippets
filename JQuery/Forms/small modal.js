//http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_modal_sm&stacked=h

$("#modaloSUBSECTOR").modal('toggle');

//http://getbootstrap.com/javascript/#modals
 <div id="modaloSUBSECTOR" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
        </div>
        <div class="modal-body">
          ...
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->