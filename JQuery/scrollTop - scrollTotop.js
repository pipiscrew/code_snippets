//http://stackoverflow.com/a/14981461
$("html, body").animate({ scrollTop: 50 }, "slow");	


//to specific ID
$('html, body').animate({
    scrollTop: $("#doc_container").offset().top
}, 2000);	