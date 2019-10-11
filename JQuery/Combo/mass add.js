//***Fill HTML control via Server Side***

<?php
 
    $building_type= getSet($db, "select building_type as txt from elevators group by building_type order by building_type", null);
    $elevator_type= getSet($db, "select elevator_type as txt from elevators group by elevator_type order by elevator_type", null);
    $internal_doors= getSet($db, "select internal_doors as txt from elevators group by internal_doors order by internal_doors", null);
    $door_type= getSet($db, "select door_type as txt from elevators group by door_type order by door_type", null);
    $external_floor_door= getSet($db, "select external_floor_door as txt from elevators group by external_floor_door order by external_floor_door", null);
    $door_collisions= getSet($db, "select door_collisions as txt from elevators group by door_collisions order by door_collisions", null);
    $lock_type= getSet($db, "select lock_type as txt from elevators group by lock_type order by lock_type", null);
    $engine_room= getSet($db, "select engine_room as txt from elevators group by engine_room order by engine_room", null);
    $trochaliostasio= getSet($db, "select trochaliostasio as txt from elevators group by trochaliostasio order by trochaliostasio", null);
    $cableway_count= getSet($db, "select cableway_count as txt from elevators group by cableway_count order by cableway_count", null);
    $magnet_power_supply= getSet($db, "select magnet_power_supply as txt from elevators group by magnet_power_supply order by magnet_power_supply", null);
    $brake_power_supply= getSet($db, "select brake_power_supply as txt from elevators group by brake_power_supply order by brake_power_supply", null);
    $light_chamber= getSet($db, "select light_chamber as txt from elevators group by light_chamber order by light_chamber", null);
    $light_type= getSet($db, "select light_type as txt from elevators group by light_type order by light_type", null);
    $light_well= getSet($db, "select light_well as txt from elevators group by light_well order by light_well", null);
     
    $building_type_html = create_html_select_elements($building_type);
    $elevator_type = create_html_select_elements($elevator_type);
    $internal_doors = create_html_select_elements($internal_doors);
    $door_type = create_html_select_elements($door_type);
    $external_floor_door = create_html_select_elements($external_floor_door);
    $door_collisions = create_html_select_elements($door_collisions);
    $lock_type = create_html_select_elements($lock_type);
    $engine_room = create_html_select_elements($engine_room);
    $trochaliostasio = create_html_select_elements($trochaliostasio);
    $cableway_count = create_html_select_elements($cableway_count);
    $magnet_power_supply = create_html_select_elements($magnet_power_supply);
    $brake_power_supply = create_html_select_elements($brake_power_supply);
    $light_chamber = create_html_select_elements($light_chamber);
    $light_type = create_html_select_elements($light_type);
    $light_well = create_html_select_elements($light_well);
     
    function create_html_select_elements($record_set)
    {
        $html = "<option value='0'></option>";
        foreach($record_set as $row) {
            $html .= "<option>{$row['txt']}</option>";
        }
         
        $html .= "<option>**new**</option>";
         
        return $html;
    }
 
?>
 
<script>
    $(function ()
        {
            //when new add it to combo + select it - http://stackoverflow.com/a/24281246/1320686
            $('#light_well, #light_type, #light_chamber, #brake_power_supply, #magnet_power_supply, #cableway_count, #trochaliostasio, #engine_room, #lock_type, #door_collisions, #external_floor_door, #door_type, #internal_doors, #elevator_type, #building_type').on('change', function() {
              
                 if (this.value == "**new**")  {
  
                    var new_entry = prompt("Input the new record", "");
  
                    if (!new_entry)
                        return;
  
                    var o = new Option(new_entry);
                    o.selected=true;
                    $("#" + this.name).append(o);
                }
              
            });
    }); // jQ
</script>
<body>
    <div class='form-group'>
        <label>building_type :</label>
        <select name='building_type' id='building_type' class='form-control'> <?=$building_type_html?> </select>
    </div>
     
    <div class='form-group'>
        <label>elevator_type :</label>
        <select name='elevator_type' id='elevator_type' class='form-control'><?=$elevator_type?> </select>
    </div>
.
.
.
.
.
.
.   
    <div class='form-group'>
        <label>light_well :</label>
        <select name='light_well' id='light_well' class='form-control'><?=$light_well ?> </select>
    </div>
</body>


//***Fill HTML control via Client Side***

<?php
 
    $building_type= getSet($db, "select building_type from elevators group by building_type order by building_type", null);
    $elevator_type= getSet($db, "select elevator_type from elevators group by elevator_type order by elevator_type", null);
    $internal_doors= getSet($db, "select internal_doors from elevators group by internal_doors order by internal_doors", null);
    $door_type= getSet($db, "select door_type from elevators group by door_type order by door_type", null);
    $external_floor_door= getSet($db, "select external_floor_door from elevators group by external_floor_door order by external_floor_door", null);
    $door_collisions= getSet($db, "select door_collisions from elevators group by door_collisions order by door_collisions", null);
    $lock_type= getSet($db, "select lock_type from elevators group by lock_type order by lock_type", null);
    $engine_room= getSet($db, "select engine_room from elevators group by engine_room order by engine_room", null);
    $trochaliostasio= getSet($db, "select trochaliostasio from elevators group by trochaliostasio order by trochaliostasio", null);
    $cableway_count= getSet($db, "select cableway_count from elevators group by cableway_count order by cableway_count", null);
    $magnet_power_supply= getSet($db, "select magnet_power_supply from elevators group by magnet_power_supply order by magnet_power_supply", null);
    $brake_power_supply= getSet($db, "select brake_power_supply from elevators group by brake_power_supply order by brake_power_supply", null);
    $light_chamber= getSet($db, "select light_chamber from elevators group by light_chamber order by light_chamber", null);
    $light_type= getSet($db, "select light_type from elevators group by light_type order by light_type", null);
    $light_well= getSet($db, "select light_well from elevators group by light_well order by light_well", null);
 
?>
 
<script>
 
     
    $(function ()
        {
            fill_elevator_combos();
 
            //when new add it to combo + select it - http://stackoverflow.com/a/24281246/1320686
            $('#light_well, #light_type, #light_chamber, #brake_power_supply, #magnet_power_supply, #cableway_count, #trochaliostasio, #engine_room, #lock_type, #door_collisions, #external_floor_door, #door_type, #internal_doors, #elevator_type, #building_type').on('change', function() {
             
                 if (this.value == "**new**")  {
 
                    var new_entry = prompt("Input the new record", "");
 
                    if (!new_entry)
                        return;
 
                    var o = new Option(new_entry);
                    o.selected=true;
                    $("#" + this.name).append(o);
                }
             
            });
    }); // jQ
     
    function fill_elevator_combos()
    {
            var building_type =   <?php echo json_encode($building_type); ?>;
            setComboItems("building_type", building_type);
             
            var elevator_type =   <?php echo json_encode($elevator_type); ?>;
            setComboItems("elevator_type", elevator_type);
 
            var internal_doors =   <?php echo json_encode($internal_doors); ?>;
            setComboItems("internal_doors", internal_doors);
             
            var door_type =   <?php echo json_encode($door_type); ?>;
            setComboItems("door_type", door_type);
 
            var external_floor_door =   <?php echo json_encode($external_floor_door); ?>;
            setComboItems("external_floor_door", external_floor_door);
             
            var door_collisions =   <?php echo json_encode($door_collisions); ?>;
            setComboItems("door_collisions", door_collisions);
             
            var lock_type =   <?php echo json_encode($lock_type); ?>;
            setComboItems("lock_type", lock_type);
 
            var engine_room =   <?php echo json_encode($engine_room); ?>;
            setComboItems("engine_room", engine_room);
 
            var trochaliostasio =   <?php echo json_encode($trochaliostasio); ?>;
            setComboItems("trochaliostasio", trochaliostasio);
             
            var cableway_count =   <?php echo json_encode($cableway_count); ?>;
            setComboItems("cableway_count", cableway_count);
 
            var magnet_power_supply =   <?php echo json_encode($magnet_power_supply); ?>;
            setComboItems("magnet_power_supply", magnet_power_supply);
                 
            var brake_power_supply =   <?php echo json_encode($brake_power_supply); ?>;
            setComboItems("brake_power_supply", brake_power_supply);
 
            var light_chamber =   <?php echo json_encode($light_chamber); ?>;
            setComboItems("light_chamber", light_chamber);
 
            var light_type =   <?php echo json_encode($light_type); ?>;
            setComboItems("light_type", light_type);
 
            var light_well =   <?php echo json_encode($light_well); ?>;
            setComboItems("light_well", light_well);
 
            //empty vars
            building_type = elevator_type = internal_doors = door_type = external_floor_door = door_collisions = lock_type = engine_room = trochaliostasio = cableway_count = magnet_power_supply = brake_power_supply = light_chamber = light_type = light_well = null
    }
     
    function setComboItems(ctl_name, jArray)
    {
        if(jArray) {
            var combo_rows = "<option value='0'></option>";
            for (var i = 0; i < jArray.length; i++)
            {
                combo_rows += "<option>" + jArray[i][ctl_name] + "</option>";
            }
             
            combo_rows+= "<option>**new**</option>";
             
            $("[name=" + ctl_name + "]").html(combo_rows);
            $("[name=" + ctl_name + "]").change();
        }
    }
     
</script>
 
<body>
    <div class='form-group'>
        <label>building_type :</label>
        <select name='building_type' id='building_type' class='form-control'> </select>
    </div>
 
    <div class='form-group'>
        <label>elevator_type :</label>
        <select name='elevator_type' id='elevator_type' class='form-control'> </select>
    </div>
.
.
.
.
.
.
.
 
    <div class='form-group'>
        <label>light_well :</label>
        <select name='light_well' id='light_well' class='form-control'> </select>
    </div>
</body>