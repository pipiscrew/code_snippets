
//update whn using arrow function no need the _this, talks direct to this
   var _this = this;

    this.apiService.recoverUser(userRecover).subscribe(
      function (res: any) {
        debugger;

        if (!res.Succeeded) {
          _this.serverErrorDescription = res.Errors;
        } else {
          _this.serverErrorDescription = "";
          _this.successAlert = true;

          setTimeout(() => {
            _this.router.navigateByUrl('/auth/login');
          }, 5000);  //5s

        }
      }, function (err) {
        //debugger;
        if (err.error.Message) {
          _this.serverErrorDescription = err.error.Message;
        } else {
          _this.serverErrorDescription = "Πρόβλημα δικτύου";
        }
      }
