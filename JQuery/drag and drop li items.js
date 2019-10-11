//https://github.com/RubaXa/Sortable/
//http://www.pipiscrew.com/2015/09/js-drag-drop-list-w-rubaxa-sortable/

<script type='text/javascript' src='jquery-1.11.0.min.js'></script>
<script type='text/javascript' src='Sortable.min.js'></script>
<script type='text/javascript' src='jquery.binding.js'></script>
 
<script>
$(function ()
    //init list
    $("#foo").sortable({ scroll: true, scrollSensitivity: 30, scrollSpeed: 10 });
 
    ////////////////////////////////////////
    // MODAL SUBMIT aka save & update button
    $('#formMATEDSORT').submit(function(e) {
        e.preventDefault();
      
        //store the items 1by1
        var arr = new Array();
        var listItems = $("#foo li");
        listItems.each(function(idx, li) {
            var product = $(li);
 
            arr.push(product.data('rec_id'));
        });
 
        var formURL = $(this).attr("action");
         
        loading.appendTo($('#formMATEDSORT'));
 
        $.ajax(
        {
            url : formURL,
            type: "POST",
            data : {arr : arr},
            success:function(data, textStatus, jqXHR)
            {
                console.log(data);
                loading.remove();
 
                if (data=="00000")
                {
                    //close modal
                    $('#modalMATED').modal('toggle');
                }
                else
                    alert("ERROR");
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                loading.remove();
                alert("ERROR - connection error");
            }
        });
    });
});
 
<!-- NEW MATED MODAL [START] -->
<div class="modal fade" id="modalMATEDSORT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" >Sort</h4>
            </div>
            <div class="modal-body">
                <form id="formMATEDSORT" role="form" method="post" action="tab_MAted_sort_save.php">
 
             
                    <ul id="foo" class="block__list block__list_words">
                    <?php 
                        $db_sort = getSet($db, "select * from MAted order by MAted__order_by",null);
                         
                        foreach($db_sort as $row) {
                                echo "<li data-rec_id=" . $row["MAted_id"] . ">" . $row["MAted_title"] . "</li>";
                            }
                    ?>
                    </ul>
                    <div class="modal-footer">
                        <button id="bntCancel_MATEDSORT" type="button" class="btn btn-default" data-dismiss="modal">
                            cancel
                        </button>
                        <button id="bntSave_MATEDSORT" class="btn btn-primary" type="submit" name="submit">
                            save
                        </button>
                    </div>
                </form>
            </div><!-- End of Modal body -->
        </div><!-- End of Modal content -->
    </div><!-- End of Modal dialog -->
</div><!-- End of Modal -->
<!-- NEW MATED MODAL [END] -->



//tab_MAted_sort_save.php
<?php
@session_start();
 
if (!isset($_SESSION["id"])) {
    header("Location: index.php");
    exit ;
}
 
//here is array
//var_dump($_POST["arr"]);
 
//DB
require_once ('config.php');
  
$db = connect();
 
 
$arr = $_POST["arr"];
 
$res=null;
for ($i = 0; $i < sizeof($arr); $i++) {
    $res = executeSQL($db,"update MAted set MAted__order_by=? where MAted_id=?",array($i+1,$arr[$i]));
}
 
echo "00000";
 
?>