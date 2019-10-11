//disable auto-increment on column
//ALTER TABLE job_types CHANGE `job_type_id` `job_type_id` INT(11) NOT NULL
ALTER TABLE `job_types` MODIFY COLUMN `job_type_id`  int(11) NOT NULL FIRST ;
.
.
.

//restore back auto-increment on column, FIRST = reorder record by this field
ALTER TABLE job_types
MODIFY COLUMN `job_type_id`  int(11) NOT NULL AUTO_INCREMENT FIRST ;+


////////set auto-increment + primary key
ALTER TABLE `adbook_companies`
MODIFY COLUMN `companyid`  int(11) NOT NULL AUTO_INCREMENT FIRST ,
ADD PRIMARY KEY (`companyid`);
