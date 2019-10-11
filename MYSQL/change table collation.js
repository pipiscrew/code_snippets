//http://stackoverflow.com/questions/5906585/change-database-collation
//https://www.a2hosting.co.uk/kb/developer-corner/mysql/convert-mysql-database-utf-8
ALTER DATABASE thefaced_fb_offer CHARACTER SET utf8 COLLATE utf8_unicode_ci;


change database collation:
ALTER DATABASE <database_name> CHARACTER SET utf8 COLLATE utf8_unicode_ci;


change table collation:
ALTER TABLE <table_name> CONVERT TO CHARACTER SET utf8;


change column collation:
ALTER TABLE <table_name> MODIFY <column_name> VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci;