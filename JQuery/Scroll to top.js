//js
<script type="text/javascript">$(document).ready(function(){
$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
});</script>


//html
<div id="scroller" class="b-top" style="display: block;"><span class="b-top-but">TOP</span></div>

//css
.b-top-but {
z-index: 2600;
position: absolute;
display: block;
left: 56px;
bottom: 0;
margin: 0 0 0 100%;
padding: 32px 12px 4px;
color: white;
background: #D8D5C2 url(http://site.yandex.ru/static/css/blocks/b-j-top/b-j-top.png) no-repeat 50% 11px;
border-radius: 7px;
}