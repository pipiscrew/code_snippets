//http://www.w3schools.com/jsref/jsref_sort.asp

//Sort numbers (numerically and ascending):
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

//Sort numbers (numerically and descending):
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});

//Sort numbers (alphabetically and descending):
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();


//http://www.grumelo.com/2009/02/12/sorting-multi-dimensional-javascript-arrays/
//http://www.w3schools.com/jsref/jsref_sort.asp

<script type="text/javascript">
	var myArray = [
					["Pre Event",12,"3.58"],
					["Panteleimon Giannakopoulos",10,"3.4"],
					["Stelios Kymbouropoulos",10,"5"],
					["Aimilia Papakonstantinou",10,"4.5"],
					["Manica Balasegaram",16,"4.25"],
					["Yannis Zouganelis",9,"4.33"],
					["Symbiosis Team",9,"4.56"],
					["Ioannis Giousis",16,"2.56"],
					["Katirtsigianoglou",9,"2.89"],
					["Jetse Goris",8,"4.88"]	
				];

	myArray.sort(descendingSort);

	function descendingSort(a, b) {
		a = a[1];
		b = b[1];

		return b - a;
	}

	console.log(myArray);

//u cant do it on the same script
//take place the last console.log

	myArray.sort(ascendingSort);

	function ascendingSort(a, b) {
		a = a[1];
		b = b[1];

		return a - b;
	}


	console.log(myArray);

</script>

