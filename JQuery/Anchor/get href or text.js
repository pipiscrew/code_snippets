//js
$(function(){
  $('div.res a').click(function(){
    alert($(this).attr('href'));
  });
});
For Text:

$(function(){
  $('div.res a').click(function(){
    alert($(this).text());
  });
});

//html
<a href="#customersTAB" data-toggle="tab">Πελάτες</a>