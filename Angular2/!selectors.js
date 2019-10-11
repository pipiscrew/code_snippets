//.html
<form (submit)="loginUser($event)">
  <div class="container">
  <div>
    <input type="text" autocomplete="off" placeholder="Username" id="username">
  </div>
  <div>
    <input type="password" autocomplete="off" placeholder="Password" id="password">
  </div>
  <div>
    <button type="submit" id="submit">Submit</button>
  </div>
</div>
</form>

//.ts
  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }