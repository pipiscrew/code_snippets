select LEFT(event_descr, LOCATE(".", event_descr)-1) AS `itemleft` from events