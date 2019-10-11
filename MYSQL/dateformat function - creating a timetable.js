//http://www.pipiscrew.com/2015/08/mysql-dateformat-function-creating-a-timetable/
//http://www.w3schools.com/sql/func_date_format.asp

<div style="font-family: 'Roboto', sans-serif;font-size:26px;font-weight: bold;color:#B0166C;">&nbsp;Program</div>

<?php
        $timetable = getSet($db,"select event_timeline_id,DATE_FORMAT(event_timeline_time,'%d %b, %Y') as eventdate, DATE_FORMAT(event_timeline_time,'%H:%i') as eventtime,event_timeline_descr from event_timeline where event_id=? order by event_timeline_time ASC",array($event_id));
 
        $last_datetime="";
        $day=0;
 
        foreach ($timetable as $time) {
            if ($last_datetime!=$time['eventdate'])
            {
                echo "<div style='margin-bottom:5px;border-bottom:3px #B0166C solid'>&nbsp;</div>";
                $day+=1;
 
                echo "<span style=\"font-family: 'Roboto', sans-serif;font-size:23px;font-weight: bold;color:#B0166C;\">&nbsp;Day {$day} :&nbsp;</span><span style=\"font-family: 'Roboto', sans-serif;font-size:23px;font-weight: bold;color:#000000;\">{$time['eventdate']}</span><br/><br/>";
            }
            else
                echo "<hr>";
 
            echo "<span style=\"font-family: 'Roboto', sans-serif;font-size:18px;font-weight: bold;color:#B0166C;\">&nbsp;{$time['eventtime']}&nbsp;</span><span style=\"font-family: 'Roboto', sans-serif;font-size:18px;color:#000000;\">{$time['event_timeline_descr']}</span>";
 
            $last_datetime = $time['eventdate'];
        }
?>

CREATE TABLE `event_timeline` (
  `event_timeline_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` int(11) DEFAULT NULL,
  `event_timeline_time` datetime DEFAULT NULL,
  `event_timeline_descr` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`event_timeline_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
