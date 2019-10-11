//https://stackoverflow.com/a/43365158/1320686

console.log("1) "+  new Date().toDateString());
console.log("2) "+  new Date().toISOString());
console.log("3) "+  new Date().toJSON());
console.log("4) "+  new Date().toLocaleDateString());
console.log("5) "+  new Date().toLocaleString());
console.log("6) "+  new Date().toLocaleTimeString());
console.log("7) "+  new Date().toString());
console.log("8) "+  new Date().toISOString().slice(0,10));


1) Tue Sep 03 2019
2) 2019-09-03T20:40:48.681Z
3) 2019-09-03T20:40:48.682Z
4) 9/3/2019
5) 9/3/2019, 10:40:48 PM
6) 10:40:48 PM
7) Tue Sep 03 2019 22:40:48 GMT+0200 (GMT+02:00)
8) 2019-09-03


//otherwise
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
document.write(today);