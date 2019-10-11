//http://stackoverflow.com/questions/6385293/simple-two-column-html-layout-without-using-tables

//as CLASS
<style type="text/css">
.wrap {
   width:600px;
   margin:0 auto;
}
.left_col {
   float:left;
   width:300px;
}
.right_col {
   float:right;
   width:300px;
}
</style>

<div class="wrap">
    <div class="left_col">
<a id="facebook-share" href="javascript:void(0)"><img src="images/fb.png" /></a>
    </div>
    <div class="right_col" id="twitter-share2">
<a id="twitter-share" href="javascript:void(0)"><img src="images/tw.png" /></a>
    </div>
</div>


//as ID
<style type="text/css">
#wrap {
   width:600px;
   margin:0 auto;
}
#left_col {
   float:left;
   width:300px;
}
#right_col {
   float:right;
   width:300px;
}
</style>

<div id="wrap">
    <div id="left_col">
        ...
    </div>
    <div id="right_col">
        ...
    </div>
</div>

