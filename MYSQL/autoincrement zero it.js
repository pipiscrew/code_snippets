//http://stackoverflow.com/questions/740358/mysql-reorder-reset-auto-increment-primary-key

//For MySQLs it will reset the value to MAX(id) + 1.
ALTER TABLE `users` AUTO_INCREMENT = 1;



//set the next 
CREATE TABLE `client_sectors` (
  `client_sector_id` int(11) NOT NULL,
  `client_sector_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`client_sector_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;