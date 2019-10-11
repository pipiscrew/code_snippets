//http://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart
//http://www.pipiscrew.com/2014/12/php-dynamic-add-columns-on-google-chart/

<?php
//get users
$chart_db_users = getSet($db,"select user_id,fullname from users where user_level_id in (31,42,59)",null);
 
$chart_row_setup = array();
 
$chart_columns_setup= array();
$chart_columns_setup[]="Month";
for( $i= 0 ; $i <= sizeof($chart_db_users)-1 ; $i++ )
{
    $chart_columns_setup[]  = $chart_db_users[$i]["fullname"];
}
 
//always on 0 array position are the bar names
$chart_row_setup[0] = $chart_columns_setup;
 
//below merge the bars values
$col_vals= array();
 
//for each month
for( $m= 1 ; $m <= 12 ; $m++ )
{
    $col_vals= array();
 
    $col_vals[]=monthName($m);
 
    //construct valid date for mySQL
    if ($m<10)
    {
        $start = date("Y-0{$m}-01");
 
        $end =  get_end_of_the_month($m,date('Y'));
    }
    else
    {   $start = date("Y-{$m}-01");
        $end =  get_end_of_the_month($m,date('Y'));
    }
 
    //for each user
    for( $i= 0 ; $i <= sizeof($chart_db_users)-1 ; $i++ )
    {
        //query with date between depends on $m variable
        $col_vals[] = (int) getScalar($db,"select count(offer_id) from offers where offer_seller_id=".$chart_db_users[$i]['user_id']." and offer_proposal_date between '".$start."' and '".$end."'",null);
    }
 
    $chart_row_setup[]=$col_vals;
}
 
//http://edpriceishungry.com/2010/01/04/converting-integers-to-monthnames-in-php/
function monthName($month_int) {
    $month_int = (int)$month_int;
    $timestamp = mktime(0, 0, 0, $month_int);
    return date(“F”, $timestamp);
}
 
function get_end_of_the_month($month, $year) {
    if (strlen($month)==1)
        $month="0".$month;
 
    //t returns the number of days in the month of a given date
    $d = date("t", strtotime(date("{$year}-{$month}-d")));
    $m = date("{$year}-{$month}-{$d}"); //format back to mysql style!
    return  $m;
}
?>
 
//pass array to javascript
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
 
      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(<?= json_encode($chart_row_setup);?>);
 
        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };
 
        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
 
        chart.draw(data, options);
      }
    </script>