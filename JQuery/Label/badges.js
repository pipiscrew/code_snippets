//over all (aka override) via position: absolute
<span id="clients_yearly" class="badge alert-info" style="font-family: 'Arial, Helvetica, sans-serif';position: absolute; left: 30px; top: 2px" title="Clients this year"></span>

//http://stackoverflow.com/a/21956578
//badge by default is gray, we apply bootstrap classes as :
  <span class="badge alert-info">badge</span> Info
  <span class="badge alert-success">badge</span> Success 
  <span class="badge alert-danger">badge</span> Danger   
  <span class="badge alert-warning">badge</span> Warning
  
  <span class="badge progress-bar-info">badge</span> Info
  <span class="badge progress-bar-success">badge</span> Success
  <span class="badge progress-bar-danger">badge</span> Danger
  <span class="badge progress-bar-warning">badge</span> Warning
  
  //use #active# to get the color you like
  <span id="clients_yearly" class="badge btn-info active" style="font-family: 'Arial, Helvetica, sans-serif';position: absolute; left: 5px; top: 2px" title="Clients this year"></span>
  
  
  //ex2
  <h3>1. A simple badge</h3>
<p>you have <span class="badge">3</span> items in your shopping cart</p>
<h3>2. Badge combinations</h3>
<a href="#" class="btn btn-primary">shopping cart <span class="badge">3</span></a>


//http://stackoverflow.com/questions/18730116/twitter-bootstrap-3-0-how-do-i-badge-badge-important-now
//http://www.bootply.com/115956
<div class="container"> 
  <h1><span class="badge alert-info">badge</span> Heading 1</h1>  
  <hr>  
  <h2><span class="badge alert-success">badge</span> Heading 2</h2> 
  <hr>  
  <h3><span class="badge alert-danger">badge</span> Heading 3</h3>  
  <hr>  
  <h4><span class="badge alert-warning">badge</span> Heading 3</h4>
</div>