$("a.mylink").click(function(e) {
   var text = $("#textBoxId").val();
   document.location.href = $(this).attr("href") + "?txt=" + text;
   e.preventDefault();
});



//Html

    <input type="text" id="demoQuery" />
    <a id='demoLink' href='javascript:'>Iam a link</a>

//Javascript

jQuery('#demoLink').bind('click',function(e){
		//always @ first line
      e.preventDefault();
      document.location.href="someUrl.php?text="+ jQuery('#demoQuery').val();     
});