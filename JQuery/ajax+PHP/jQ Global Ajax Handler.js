//http://stackoverflow.com/a/22966026
//There is a global configuration using jQuery. This code runs on every ajax request.

<div id='ajax_loader' style="position: fixed; left: 50%; top: 50%; display: none;">
    <img src="themes/img/ajax-loader.gif"></img>
</div>

<script type="text/javascript">
    jQuery(function ($){
        $("#ajax_loader").ajaxStop(function(){
            $(this).hide();
         });
         $("#ajax_loader").ajaxStart(function(){
             $(this).show();
         });    
    });    
</script>