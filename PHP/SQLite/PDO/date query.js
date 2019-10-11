sqlite doesnt have date field type, using dddd/mm/yy on TEXT field type, we are able to execute a query (get_events.php) like :


select * from day_offs 
left join users on users.user_id=day_offs.user_id
where date_occur between '2016-09-23' and '2016-09-29'

CREATE TABLE "day_offs" (
    `day_off_id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    `day_off_type`  INTEGER,
    `user_id`   INTEGER,
    `date_occur`    TEXT,
    `comment`   TEXT
);


more at https://www.sqlite.org/lang_datefunc.html