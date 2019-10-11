//http://www.pipiscrew.com/2015/08/jsphp-get-set-to-combo-function/

<?php
 
require_once("config.php"); 
 
$db = connect();
 
$bikes = getSet($db,"select * from bikes order by bike_name",null);
 
$zories = getSet($db,"select distinct(zory) from members order by zory",null);
 
$countries = getSet($db,"select * from countries order by country_name",null);
 
?>
 
<script>
    $(function() {
        var jArray_countries =   <?php echo json_encode($countries); ?>;
        fill_select_by_json_set("country",jArray_countries,"country_id","country_name");
         
        var jArray_zories =   <?php echo json_encode($zories); ?>;
        fill_select_by_json_set("zory", jArray_zories,null,"specialization");
         
        var jArray_bikes =   <?php echo json_encode($bikes); ?>;
        fill_select_by_json_set("bike", jArray_bikes,"bike_id","bike_name");
         
    });
     
    function fill_select_by_json_set(ctl_name, json_set, json_id, json_txt){
        if(json_set && ctl_name){
            var combo_rows = "<option value='0'></option>";
            for (var i = 0; i < json_set.length; i++)
            {
                if (json_id)
                    combo_rows += "<option value='" + json_set[i][json_id] + "'>" + json_set[i][json_txt] + "</option>";
                else
                    combo_rows += "<option>" + json_set[i][json_txt] + "</option>";
            }
 
            $("[name="+ctl_name+"]").html(combo_rows);
            $("[name="+ctl_name+"]").change();
        }
    }
</script>
 
<div class="container">
 
                <div class='form-group'>
                    <label>Country :</label>
                    <select name="country" class='form-control'></select>
                </div>
 
                <div class='form-group'>
                    <label>zory :</label>
                    <select name="zory" class='form-control'></select>
                </div>
                 
                <div class='form-group'>
                    <label>Bikes :</label>
                    <select name="bike" class='form-control'></select>
                </div>
                 
</div>