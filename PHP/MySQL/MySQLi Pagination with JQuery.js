//http://onlinewebapplication.com/pagination-jquery-php-ajax-mysql/
//http://www.9lessons.info/2009/09/pagination-with-jquery-mysql-and-php.html
//http://www.sattsoft.com/tutorials/contents/1/10/pagination-with-jquery-ajax-php-and-mysql.html

//html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Watchopolis - Video Portal Theme</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">

		<!-- Include CSS Assets -->

		<script src="assets/js/jquery.js"></script>

		<script type="text/javascript">
           $(document).ready(function(){
                function loading_show(){
                    //$('#loading').html("<img src='images/loading.gif'/>").fadeIn('fast');
                }
                function loading_hide(){
                    $('#loading').fadeOut('fast');
                }                
                function loadData(page){
                  //  loading_show();
                  console.log("now!");                    
                    $.ajax
                    ({
                        type: "POST",
                        url: "load_data.php",
                        data: "page="+page,
                        success: function(msg)
                        {
                            $("#container").ajaxComplete(function(event, request, settings)
                            {
                                loading_hide();
                                $("#container").html(msg);
                            });
                        }
                    });
                }
                loadData(1);  // For first time page load default results
                $('#container .pagination li.active').live('click',function(){
                    var page = $(this).attr('p');
                    loadData(page);
                    
                });           
                $('#go_btn').live('click',function(){
                    var page = parseInt($('.goto').val());
                    var no_of_pages = parseInt($('.total').attr('a'));
                    if(page != 0 && page <= no_of_pages){
                        loadData(page);
                    }else{
                        alert('Enter a PAGE between 1 and '+no_of_pages);
                        $('.goto').val("").focus();
                        return false;
                    }
                    
                });
            });

		</script>

        <style type="text/css">
            body{
                width: 800px;
                margin: 0 auto;
                padding: 0;
            }
            #loading{
                width: 100%;
                position: absolute;
                top: 100px;
                left: 100px;
                margin-top:200px;
            }
            #container .pagination ul li.inactive,
            #container .pagination ul li.inactive:hover{
                background-color:#ededed;
                color:#bababa;
                border:1px solid #bababa;
                cursor: default;
            }
            #container .data ul li{
                list-style: none;
                font-family: verdana;
                margin: 5px 0 5px 0;
                color: #000;
                font-size: 13px;
            }

            #container .pagination{
                width: 800px;
                height: 25px;
            }
            #container .pagination ul li{
                list-style: none;
                float: left;
                border: 1px solid #006699;
                padding: 2px 6px 2px 6px;
                margin: 0 3px 0 3px;
                font-family: arial;
                font-size: 14px;
                color: #006699;
                font-weight: bold;
                background-color: #f2f2f2;
            }
            #container .pagination ul li:hover{
                color: #fff;
                background-color: #006699;
                cursor: pointer;
            }
            .go_button
            {
            background-color:#f2f2f2;border:1px solid #006699;color:#cc0000;padding:2px 6px 2px 6px;cursor:pointer;position:absolute;margin-top:-1px;
            }
            .total
            {
            float:right;font-family:arial;color:#999;
            }

        </style>
        
	</head>

	<body>

        <div id="loading"></div>
        <div id="container">
            <div class="data"></div>
            <div class="pagination"></div>
        </div>
        

	</body>
</html>


//load_data.php
<?php
if ($_POST['page']) {
    include 'connection.php';
    $page = $_POST['page'];
    $cur_page = $page;
    $page -= 1;
    $per_page = 2;
    $previous_btn = true;
    $next_btn = true;
    $first_btn = true;
    $last_btn = true;
    $start = $page * $per_page;

    $db = connect();

    //set all utf8!
    $db -> query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

    //$data = $db -> query("SELECT * FROM VIDEOS GROUP BY VIDEO") or die(mysql_error());
    $data = $db -> query("SELECT * FROM VIDEOS GROUP BY VIDEO LIMIT $start, $per_page") or die(mysql_error());

    $msg = "";

    while ($info = $data -> fetch_array(MYSQLI_ASSOC)) {
        //HTML entries filter
        $msg .= "<li><b>" . $info['video'] . "</b> " . $htmlmsg . "</li>";
    }

    $msg = "<div class='data'><ul>" . $msg . "</ul></div>";

    // Content for Data

    /* --------------------------------------------- */
    $query_pag_num = "SELECT COUNT(DISTINCT video) AS count FROM VIDEOS";
    $result_pag_num = $db -> query($query_pag_num);
    $row = $result_pag_num -> fetch_array(MYSQLI_ASSOC);
    $count = $row['count'];
    $no_of_paginations = ceil($count / $per_page);

    /* ---------------Calculating the starting and endign values for the loop----------------------------------- */
    if ($cur_page >= 7) {
        $start_loop = $cur_page - 3;
        if ($no_of_paginations > $cur_page + 3)
            $end_loop = $cur_page + 3;
        else if ($cur_page <= $no_of_paginations && $cur_page > $no_of_paginations - 6) {
            $start_loop = $no_of_paginations - 6;
            $end_loop = $no_of_paginations;
        } else {
            $end_loop = $no_of_paginations;
        }
    } else {
        $start_loop = 1;
        if ($no_of_paginations > 7)
            $end_loop = 7;
        else
            $end_loop = $no_of_paginations;
    }
    /* ----------------------------------------------------------------------------------------------------------- */
    $msg .= "<div class='pagination'><ul>";

    // FOR ENABLING THE FIRST BUTTON
    if ($first_btn && $cur_page > 1) {
        $msg .= "<li p='1' class='active'>First</li>";
    } else if ($first_btn) {
        $msg .= "<li p='1' class='inactive'>First</li>";
    }

    // FOR ENABLING THE PREVIOUS BUTTON
    if ($previous_btn && $cur_page > 1) {
        $pre = $cur_page - 1;
        $msg .= "<li p='$pre' class='active'>Previous</li>";
    } else if ($previous_btn) {
        $msg .= "<li class='inactive'>Previous</li>";
    }
    for ($i = $start_loop; $i <= $end_loop; $i++) {

        if ($cur_page == $i)
            $msg .= "<li p='$i' style='color:#fff;background-color:#006699;' class='active'>{$i}</li>";
        else
            $msg .= "<li p='$i' class='active'>{$i}</li>";
    }

    // TO ENABLE THE NEXT BUTTON
    if ($next_btn && $cur_page < $no_of_paginations) {
        $nex = $cur_page + 1;
        $msg .= "<li p='$nex' class='active'>Next</li>";
    } else if ($next_btn) {
        $msg .= "<li class='inactive'>Next</li>";
    }

    // TO ENABLE THE END BUTTON
    if ($last_btn && $cur_page < $no_of_paginations) {
        $msg .= "<li p='$no_of_paginations' class='active'>Last</li>";
    } else if ($last_btn) {
        $msg .= "<li p='$no_of_paginations' class='inactive'>Last</li>";
    }
    $goto = "<input type='text' class='goto' size='1' style='margin-top:-1px;margin-left:60px;'/><input type='button' id='go_btn' class='go_button' value='Go'/>";
    $total_string = "<span class='total' a='$no_of_paginations'>Page <b>" . $cur_page . "</b> of <b>$no_of_paginations</b></span>";
    $msg = $msg . "</ul>" . $goto . $total_string . "</div>";

    $db -> close();

    // Content for pagination
    echo $msg;
}

//connection.php
<?php
function connect() {
    //setup a connection with mySQL
    $mysqli = new mysqli("localhost", "lamptc_up2five", "ZbHS3rHX", "lamptc_up2five");

    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    return $mysqli;
}
?>