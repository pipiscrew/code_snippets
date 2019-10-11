//proxy.config.json
//near package.json
//https://angular.io/guide/build

warning you have to set the use of proxy.config.json @
package.json @:
"start": "ng serve --proxy-config proxy.config.json",

always start with 'npm start'

--

{
    "/api": {
        "target": "http://localhost",
        "secure": false,
        "changeOrigin": true
    }
}

any call asks by /api will be proxified o localhost/api folder

ex.
this.http.get<myData>('/api/database.php')