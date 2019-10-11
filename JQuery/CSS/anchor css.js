//Sometimes you need to override other styles for elements, in which case you can use the !important modifier on your rule:

a {
    text-decoration: none !important;
}


<style>
	a,a:hover {
		color:black;
		text-decoration: none;
		  font-family: 'Roboto';
		  font-style: normal;
		  font-weight: 700;
	  	}
</style>

//ex2
	a {	color: #d8077f;	}
	a:hover{ color: blue; background-color: transparent !important;}

//ex3	
<head>
    <style>
       a {
           color: #d8077f;
       }
       a:hover{
           color: blue;
       }
       a:active{
           color: green;
       }
    </style>
</head>
<body>
    <a href='http://google.com'>Google</a>
</body>