//http://stackoverflow.com/a/39268074/1320686
//use directly localStorage, as mentioned by other here, it is a builtin browser features 
localStorage.colorSetting = '#a4509b';    // dot notation
localStorage['colorSetting'] = '#a4509b'; // bracket notation
localStorage.setItem('colorSetting', '#a4509b');

//delete
localStorage.removeItem("default");

//read
let json= localStorage.getItem('default');
 
//save
let g = JSON.stringify(this.canvas);

if (g!=null) {
   localStorage.default = g;

    alert ("My lord, saved!");
}