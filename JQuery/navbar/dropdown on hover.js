//http://fellowtuts.com/twitter-bootstrap/2-ways-for-hover-dropdown-in-bootstrap-3-navbar/

<link href="bootstrap.min.css" rel="stylesheet" type="text/css" />

<style>
	@media (min-width: 768px) {
		.dropdown:hover .dropdown-menu {
			display: block;
	        margin-top: 0;  /*remove the gap so it doesn't close*/
		}
	}
</style>
<ul class="nav navbar-nav">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
</ul>