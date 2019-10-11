//http://www.pipiscrew.com/2015/07/jsphp-jquery-simple-upload-plugin/

//upload.js
(function( $ ) {
 
$.fn.upload = function(options ) {
 
    var opts = $.extend({}, $.fn.upload.defaults, options);
    // $.extend(defaults, options);
 
    var file_element="#"+this.attr('id');
    var drop_element="#"+this.attr('id')+"_zone";
    var drop_list="#"+this.attr('id')+"_list";
 
    //enable dataTransfer property
    //http://stackoverflow.com/a/14792183/1320686
    //http://api.jquery.com/category/events/event-object/
    jQuery.event.props.push('dataTransfer');
 
    //return this.each( function() {
 
        $( this ).change(function (){
            console.log(file_element);
            console.log(drop_element);
            console.log(drop_list);
 
            console.log("A");
            var files = $(this).prop("files")
 
            handleFileSelect(files, true);
 
        }); 
 
    $.fn.reset = function() {
        $(drop_list).html('');
        $(drop_element).data("filename", "0.jpg");
        //https://css-tricks.com/snippets/jquery/clear-a-file-input/#comment-534596
        $(file_element).val('') ;
    };
 
          // Set up the default options.
//        $.fn.upload.defaults = {
//          single : "makis",
//          ftp_filename : 0
//        };
 
   // });
 
    function handleFileSelect(evt,is_file_choose) {
        $(drop_element).removeClass("dropstylehover");
 
        console.log("B");
 
        // files is a FileList of File objects. List some properties.
        var files;
 
        //when files dropped
        if (!is_file_choose){
            evt.stopPropagation();
            evt.preventDefault();
 
            files = evt.dataTransfer.files; // FileList object.
        }
        else {
            files = evt
        }
 
        var output = [];
 
        var file_total_limit;
 
        if (opts.single==1){
            console.log("single");
            file_total_limit = 1;
        }
        else {
                console.log("multiple");
            file_total_limit = files.length
        }
 
        //get ftp_filename by HTML5 tag
        if ($(drop_element).data('filename')!=null)
            opts.ftp_filename = $(drop_element).data('filename');
 
        for (var i = 0; i < file_total_limit; i++) {
          var f = files[i];
 
          output.push('<li><span style="margin-right:5px" id="prog_'+i+'">0%</span><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                      f.size, ' bytes, last modified: ',
                      f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                      '</li>');
 
                if (opts.ftp_filename!=0)
                {   //when filename specified
                    var suffix="";
                    var fl = opts.ftp_filename;
 
                    if (i>0) //when multiple files number it linear
                    {
                        suffix = "_" + (1 + i); //(so the first is 2..)
 
                        var dot = fl.lastIndexOf(".");
 
                        if (dot>-1) // filename_suffix.ext
                            fl = fl.substring(0, dot) + suffix + fl.substring(dot);
                        else //when no dot found -> filename_suffix
                            fl = fl + suffix;
 
                    }
 
                    uploadFile(files[i], i, fl, opts.overwrite);
                }
                else  //when no ftp filename specified, use the original
                    uploadFile(files[i], i, f.name, opts.overwrite);
        }
 
        $(drop_list).html('<ul>' + output.join('') + '</ul>');
    } 
 
    $(drop_element).on('dragover', function(e){
        console.log('handleDragOver');
        e.stopPropagation();
        e.preventDefault();
 
        $(drop_element).addClass("dropstylehover");
 
        e.dataTransfer.dropEffect = 'move'; // Explicitly show this is a copy.
    });
 
    $(drop_element).on('dragleave', function(e){
        console.log('handleDragLeave');
        $(drop_element).removeClass("dropstylehover");
    });
 
    // upload file
    function uploadFile(file, array_pos, ftp_filename, overwrite) {
 
        // prepare XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "upload.php");
        xhr.setRequestHeader("X-File-Pos", array_pos);
        xhr.setRequestHeader("X-File-Name", ftp_filename);
 
        xhr.onload = function() {
 
                if (this.status == 200) {
                    //filename_uploaded
                    var d = JSON.parse(this.responseText);
                    console.log(d);
 
                    // Fire the setup callback
                    $.isFunction( opts.completed ) && opts.completed.call( this, d.filename );
 
                    $("#prog_"+array_pos).html(d.msg);
                //  console.log("done",this.responseText);
                }
 
            console.log('onload');
//          result.innerHTML += this.responseText;
//          handleComplete(file.size);
        };
        xhr.onerror = function() {
            var d = JSON.parse(this.responseText);
            $("#prog_"+array_pos).html(d.msg);
 
            // Fire the setup callback
            $.isFunction( opts.error ) && opts.error.call( this );
 
            //console.log('onerror');
//          result.textContent = this.responseText;
//          handleComplete(file.size);
        };
        xhr.upload.onprogress = function(e) {
             if (e.lengthComputable) {
                var percentComplete = (e.loaded / e.total) * 100;
                $("#prog_"+array_pos).html(parseFloat(percentComplete).toFixed(2) + "%");
                // so its available here because of closures
            }
 
            console.log('onprogress',e);
           // handleProgress(event);
        }
        xhr.upload.onloadstart = function(event) {
            console.log('onloadstart');
        }
 
        // prepare FormData
        var formData = new FormData();
        formData.append('myfile', file);
        formData.append('ftp_filename', ftp_filename);
        formData.append('overwrite', overwrite); 
 
        xhr.send(formData);
    }
 
    $.fn.upload.defaults = {
        single : 1,
        overwrite: 0,
        ftp_filename: 0,
        completed : null,
        error : null,
    };
 
//    $(drop_element).on('drop', function(e){
//      console.log('handledrop');
//      handleFileSelect(e, false);
//    });
 
}
 
})( jQuery );



//upload.php
<?php
//var_dump($_FILES);
//var_dump($_POST);
//
//
//exit;
 
$filename = $_POST["ftp_filename"];
$overwrite = $_POST["overwrite"];
 
//the data got
//array(1) { ["myfile"]=> array(5) {
//["name"]=> string(6) "70.jpg"
//["type"]=> string(10) "image/jpeg"
//["tmp_name"]=> string(18) "/var/tmp/php7HREDP"
//["error"]=> int(0) ["size"]=> int(15229) } }
 
    $target_dir = "prod_img/";
    $target_file = $target_dir . $filename;//. basename($_FILES["myfile"]["name"]);
 
    if (file_exists($target_file))
        if ($overwrite==0)
        {
            echo "file already exists";
            exit;
        }
 
    if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $target_file)) {
        echo json_encode(array("filename"=>$target_file,"msg"=>"uploaded"));
        //echo "uploaded";
    } else {
        echo json_encode(array("filename"=>$target_file,"msg"=>"Sorry, there was an error uploading your file."));
    }
 
?>


//index.hmtl
<script>
    $(function ()
        {
            //general jQ callback onerror (if image doesnt exist) on edit (aka line 36)
            $("#product_drop_fl_image").error(function() {
              this.src = 'prod_img/404.jpg'; // replace with default image
            });
 
            $("#product_drop_fl").upload({
                single: 1,
                overwrite : 1,
                completed : function(e) {
                    $("#product_drop_fl_image").attr("src",e+"?" + new Date().getTime()); //avoid image cache (aka the image doesnt updated)
                },
                error : function(){
                    $("#product_drop_fl_image").attr("src","prod_img/404.jpg");
                }
            });
    });
 
    //edit button - read record
    function query_PRODUCTS_modal(rec_id){
        loading.appendTo(document.body);
 
        $.ajax(
        {
            url : "tab_products_fetch.php",
            type: "POST",
            data : { product_id : rec_id },
            success:function(data, textStatus, jqXHR)
            {
                loading.remove();
 
                if (data!='null')
                {
                    $("#product_drop_fl_image").attr("src","prod_img/" + data.product_sku + ".jpg");
                    $("#product_drop_fl_zone").data("filename",data.product_sku + ".jpg");
                }
            }
        });
    });
 
</script>
 
<div>
    <img id="product_drop_fl_image" src="prod_img/404.jpg" style="float:right;" width="60px" height="60px">
 
    <span class="btn btn-primary btn-file" id="product_drop_fl_zone" data-filename="0.jpg">
        Browse or Drop an Image file <input type="file" id="product_drop_fl" multiple>
    </span>
    <br/>
    <div id="product_drop_fl_list"></div>
</div>