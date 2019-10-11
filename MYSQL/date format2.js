//http://www.pipiscrew.com/2015/08/mysql-dateformat-function-creating-a-timetable/
//http://www.w3schools.com/sql/func_date_format.asp

select *,concat(DATE_FORMAT(event_date_start,'%d %b'), ' - ',DATE_FORMAT(event_date_end,'%d %b, %Y')) as event_period,event_date_end>now() as expired from events


//get 24h time splitted by date - ex 12 Jun, 2015
select event_timeline_id,DATE_FORMAT(event_timeline_time,'%d %b, %Y') as eventdate, DATE_FORMAT(event_timeline_time,'%H:%i') as eventtime
