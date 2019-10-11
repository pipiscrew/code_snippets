//http://stackoverflow.com/questions/2466356/javascript-object-list-sorting-by-object-property

//var cars = new Array();
//cars.push({name: "Honda",speed: 80});
//or

cars = [

    {
        name: "Honda",
        speed: 80
    },

    {
        name: "BMW",
        speed: 180
    },

    {
        name: "Trabi",
        speed: 40
    },

    {
        name: "Ferrari",
        speed: 200
    }
]

//for ASC
cars.sort(function(a, b) { 
    return a.speed - b.speed;
})

//for DESC
//cars.sort(function(a, b) { 
//    return b.speed - a.speed;
//})

for(var i in cars)
    document.writeln(cars[i].name) // Trabi Honda BMW Ferrari 