//http://getbootstrap.com/javascript/#carousel-examples

<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>

<link href="bootstrap.min.css" rel="stylesheet">

<div class="container">
	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
	  <!-- Indicators -->
	  <ol class="carousel-indicators">
		<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		<li data-target="#carousel-example-generic" data-slide-to="1"></li>
		<li data-target="#carousel-example-generic" data-slide-to="2"></li>
		<li data-target="#carousel-example-generic" data-slide-to="3"></li>
	  </ol>
	 
	  <!-- Wrapper for slides -->
	  <div class="carousel-inner">
		<div class="item active">
		  <img src="http://placehold.it/1200x315" alt="...">
		  <div class="carousel-caption">
			  <h3>Caption Text</h3>
		  </div>
		</div>
		<div class="item">
		  <img src="http://placehold.it/1200x315" alt="...">
		  <div class="carousel-caption">
			  <h3>Caption Text</h3>
		  </div>
		</div>
		<div class="item">
		  <img src="http://placehold.it/1200x315" alt="...">
		  <div class="carousel-caption">
			  <h3>Caption Text</h3>
		  </div>
		</div>
		<div class="item">
		  <img src="http://placehold.it/1200x315" alt="...">
		  <div class="carousel-caption">
			  <h3>Caption Text</h3>
		  </div>
		</div>
	  </div>
	 
	  <!-- Controls -->
	  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left"></span>
	  </a>
	  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right"></span>
	  </a>
	</div> <!-- Carousel -->
</div> <!-- container -->