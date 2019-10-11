//http://www.bothernomore.com/2008/12/16/character-encoding-hell/

Convert the field to BLOB. That's right, the first thing we need to do is converting the field type to a binary type. Then we change the character set of the database to utf8, and lastly we convert our field back to text or varchar.

alter table TABLE_NAME modify FIELD_NAME blob;
alter database DATABASE_NAME charset=utf8;
alter table TABLE_NAME modify FIELD_NAME varchar(255) character set utf8;