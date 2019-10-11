//http://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery

$("#my_image").attr("src","second.jpg");

//dont use cache 
//http://stackoverflow.com/a/1077051
//This will append the current timestamp automatically when you are creating the image, 
//and it will make the browser look again for the image instead of retrieving the one in the cache.
Try adding a cachebreaker at the end of the url:
newImage.src = "http://localhost/image.jpg?" + new Date().getTime();


//or @ php
.jpg?<?=date('YmdGi');?>
/or UTC
<img id="photo_slide_one_thumb" 
	src="../marketing/img/<?= $_GET['id'] ?>/1photo_slide_one_thumb.jpg?<?=strtotime(date("Y-m-d H:i:s")." UTC")?>"  
	width="100px" height="84px" style="margin-bottom: 2px">