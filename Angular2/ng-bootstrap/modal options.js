    //avoid modal close by ESC or by clicking outside the modal - https://stackoverflow.com/a/41590107
    //https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/modal/modal-config.ts
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    };