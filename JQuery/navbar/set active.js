//http://stackoverflow.com/a/16856375
$('.nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})