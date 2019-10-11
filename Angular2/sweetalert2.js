//https://www.pipiscrew.com/2019/07/sweetalert2-with-loading-indicator/

import { UsersApiService } from 'users-service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
 
export class UsersOverviewComponent {
 
//in the following example, using ng2-smart-table, passing the grid row data to this function
constructor(private usersService: UsersApiService) {}
 
  contextReset(rowData) {
    //dialog options
    let sao: SweetAlertOptions = {
      title: "Warning!",
      text: "You will delete the user : " + rowData.UserName,
      showCancelButton: true,
      cancelButtonText: "nah",
      confirmButtonText: "yeah",
      type: "question",
      focusConfirm: true,
      showLoaderOnConfirm: true
    };
 
    //dialog confirm promise (when showLoaderOnConfirm, this required otherwise doesnt show the indicator) - https://sweetalert2.github.io/#configuration
    sao.preConfirm = () => {
      //server activity
      return this.resetUserPassword(rowData.UserName, rowData.Email);
    };
 
    //show the dialog
    Swal.fire(sao)
      .then((result) => {
         
        if (result.value) {
 
          if (result.value == "success"){           //user press yes - result.value returned by server activity
            Swal.fire(SwalHelper.showConfirmation({ title: "Process completed", typeDlg: "success", body: "Email sent to user with futher instructions.", btnText: "οκ" }));
          }
          else {                                    //HttpErrorResponse error throw by originated promise (aka server activity)
            Swal.fire(SwalHelper.showConfirmation({ title: "Error!", typeDlg: "error", body: "Activity is not made", btnText: "οκ" }));
          }
        } else if (result.dismiss) {         //user press no
            Swal.fire(SwalHelper.showConfirmation({ title: "User press cancel button", typeDlg: "info", body: "Aborted by the user", btnText: "οκ" }));
        }
 
      });
  }
 
  resetUserPassword(username: string, email: string) {
    var user = new UserRecoverRequest();
    user.Username = username;
    user.Email = email;
 
    //https://stackoverflow.com/a/38932716 - return error to preConfirm promise, otherwise identified as good response
    return this.usersService.recoverUserRequest(user).toPromise().catch((err) => {
      return err;
    });
  }
}
 
 
//in users-service.ts we have
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class UsersApiService {
     
    apiEndPoint = environment.apiEndPoint; 
 
    /*create = (user: User) => this.http.post(this.apiEndPoint+'/PostUser', user);
    get = (id: string) => this.http.typedGet(User,`${this.apiEndPoint}/GetUserByID/${id}`);
    search = (body:any) => this.http.typedPost(User,`${this.apiEndPoint}/GetUsers`,body);
    update = (user: User) => this.http.post(this.apiEndPoint+'/UpdateUser', user);*/
 
    recoverUserRequest = (userRecoverRequest: UserRecoverRequest) => this.http.post(this.apiEndPoint + '/RecoverUser', userRecoverRequest);
}
 
 
export class UserRecoverRequest {
    Username: string;
    Email: string;
}
 
 
//spare swal-helper.ts
import { SweetAlertOptions, SweetAlertType } from "sweetalert2";
 
export class SwalHelper {
 
    public static showConfirmation(options: {
        title: string;
        body: string;
        btnText: string;
        typeDlg: SweetAlertType;
    }): SweetAlertOptions {
        return {
            title: options.title,
            text: options.body,
            showCancelButton: false,
            confirmButtonText: options.btnText,
            type: options.typeDlg,
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            }
        }
    }
}