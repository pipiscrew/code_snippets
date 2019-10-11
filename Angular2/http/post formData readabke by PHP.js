    let formData: FormData = new FormData(); 
    formData.append('username', username); 
    formData.append('password', password); 

    return this.http.post<myData>(this.baseUrl + '/api/auth.php', formData);
    
    
    
//never needed
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let formData: FormData = new FormData(); 
    formData.append('username', username); 
    formData.append('password', password); 

    return this.http.post<myData>(this.baseUrl + '/api/auth.php', formData, options);