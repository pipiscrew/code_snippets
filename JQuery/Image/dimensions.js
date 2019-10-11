    var img_h, img_w;
    var img = new Image();
    
    img.onload = function () {
        img_w = this.width;
        img_h = this.height;
        console.log(this.width + 'x' + this.height);
    }
    img.src = "http://www.x.gr/usiccast.gif";
    
    
  <img id="promo">
 $('#promo').height()
 $('#promo').width()