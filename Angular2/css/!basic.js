//https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/

*1* method
//we put CSS @ src/assets/boostrap.min.css 
//go to angular.json

@ json inside 
projects > AngularProject > architect > build >

at styles array add bootstrap.css
            "styles": [
              "src/styles.css",
              "src/assets/bootstrap.min.css"              
            ],
            
*2* method
//https://github.com/angular/angular-cli/issues/9690#issuecomment-366953388
/*
Go to styles.css

Import bootstrap by adding this line
The '~' is an alias set on the webpack config
 pointing to the assets folder... simple as that..
 */
@import "~bootstrap/dist/css/bootstrap.css";