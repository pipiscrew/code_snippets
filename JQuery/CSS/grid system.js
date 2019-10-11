/*
http://codepen.io/chriscoyier/pen/eGcLw

http://getskeleton.com/
 
http://thisisdallas.github.io/Simple-Grid/
 
http://purecss.io/grids/
 
https://css-tricks.com/dont-overthink-it-grids/
 
http://960.gs/
 
https://css-tricks.com/dont-overthink-it-grids/
*/

@import "compass/css3";

* {
  @include box-sizing(border-box);
}

$pad: 20px;

.grid {
  background: white;
  margin: 0 0 $pad 0;
  
  &:after {
    /* Or @extend clearfix */
    content: "";
    display: table;
    clear: both;
  }
}

[class*='col-'] {
	float: left;
  padding-right: $pad;
  .grid &:last-of-type {
  	padding-right: 0;
  }
}
.col-2-3 {
	width: 66.66%;
}
.col-1-3 {
	width: 33.33%;
}
.col-1-2 {
	width: 50%;
}
.col-1-4 {
	width: 25%;
}
.col-1-8 {
	width: 12.5%;
}

.module {
  padding: $pad;
  background: #eee;
}

/* Opt-in outside padding */
.grid-pad {
  padding: $pad 0 $pad $pad;
  [class*='col-']:last-of-type {
    padding-right: $pad;
  }
}

body {
	padding: 10px 50px 200px;
  background: url(http://s.cdpn.io/3/dark_wall_@2X.png);
  background-size: 300px 300px;
}
h1 {
  color: white;
  em {
  	color: #666;
    font-size: 16px;
  }
}

<h1>Don't Overthink It Grids <em>(while we wait for flexbox!)</em></h1>

<div class="grid">
   <div class="col-2-3">
     <div class="module">
       <h3>2/3</h3>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>	
     </div>
   </div>
   <div class="col-1-3">
     <div class="module">
     		<h3>1/3</h3>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies</p>	
     </div>
   </div>
</div>

<div class="grid grid-pad">
   <div class="col-2-3">
     <div class="module">
     		<h3>2/3 (Opt-in Outside Padding)</h3>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>	
     </div>
   </div>
   <div class="col-1-3">
     <div class="module">
     		<h3>1/3</h3>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.</p>	
     </div>
   </div>
</div>

<div class="grid grid-pad">
   <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
   <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
  <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
  <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
  <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
  <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
  <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
  <div class="col-1-8">
     <div class="module">
     		<h3>1/8</h3>
     </div>
   </div>
</div>

<div class="grid grid-pad">
   <div class="col-1-4">
     <div class="module">
     		<h3>1/4</h3>
     </div>
   </div>
   <div class="col-1-2">
     <div class="module">
     		<h3>1/2</h3>
     </div>
   </div>
  <div class="col-1-4">
     <div class="module">
     		<h3>1/4</h3>
     </div>
   </div>
</div>