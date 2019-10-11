
//https://stackoverflow.com/a/42342426
constructor(private route: ActivatedRoute)
this.token = this.route.snapshot.queryParams["token"];

////////////////2nd example
//route.ts
//https://stackoverflow.com/a/42721468/1320686
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { parent : 'admin'}
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { parent : 'users'}
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//ath.guard.ts
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
     console.log(next.data.parent);
      if(this.auth.isLoggedIn) {
        return true
      }
      return this.user.isLoggedIn().pipe(map(res => {
        if(res.status) {
          this.auth.setLoggedIn(true)
          return true
        } else {
          this.router.navigate(['login'], { queryParams: { redirect: next.data.parent } })
          return false
        }
      }))
  }
  
//login.ts
  constructor(private Auth: AuthService, 
              private router: Router,
              private route: ActivatedRoute) { }
              
              
someMethod() {

        let redirect = this.route.snapshot.queryParamMap.get('redirect');
        // js plain working - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
        // let params = new URLSearchParams(document.location.search);
        // let name = params.get("x"); // is the string "Jonathan"
        
        if (redirect==null)
          redirect = 'admin';

        this.router.navigate([redirect]);
}