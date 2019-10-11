//http://www.pipiscrew.com/2014/11/mysqljavascript-mysql-datetime-field-to-javascript-format-date/

//@ PHP select without format as :
select log_id, log_UTC_when from t

//at html
<table id="logger_tbl"
   data-toggle="table"
   data-striped=true
   data-url="x_pagination.php"
   data-pagination="true"
   data-page-size="50"
 
   <!-- initial sort -->
   data-sort-name="log_UTC_when" data-sort-order="desc"
 
   data-side-pagination="server"
   data-query-params="queryParamsLOGGER">
 
    <thead>
        <tr>
                                                <!-- using data-formatter attribute -->
            <th data-field="log_UTC_when" data-formatter="date_formatter" data-sortable="true">
                Date UTC
            </th>
        </tr>
    </thead>
</table  >


function date_formatter(value, row) {
    if (value==null)
        return "";
 
    var date = new Date(value);
    var options = {
        year: "numeric", month: "2-digit",
        day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false
    };
 
    return(date.toLocaleString("en-GB", options));
}