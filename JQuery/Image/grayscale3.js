//http://tutsplus.github.io/power-up-your-portfolio-with-bootstrap/

//example one
<style>
.portfolio-item {
  border-radius: 4px;
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
}
.portfolio-item:hover {
  box-shadow: 0 0 0 5px rgba(0,0,0,0.05);
  -webkit-filter: grayscale(50%);
          filter: grayscale(50%);
}
</style>

<img src="http://placekitten.com/607/400" class="portfolio-item">




//example two
<style>
.portfolio-item {
  margin-bottom: 1rem;
}
.portfolio-item img {
  border-radius: 4px;
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
}
.portfolio-item:hover img {
  box-shadow: 0 0 0 5px rgba(0,0,0,0.05);
  -webkit-filter: grayscale(50%);
          filter: grayscale(50%);
}
</style>


          <div class="portfolio-items row">

            <figure class="portfolio-item col-sm-4 item web">
              <a href="#">
                <img src="http://placekitten.com/610/400" class="img-responsive">
              </a>
            </figure>
            <figure class="portfolio-item col-sm-4 item photography">
              <a href="#">
                <img src="http://placekitten.com/609/400" class="img-responsive">
              </a>
            </figure>
			</div>