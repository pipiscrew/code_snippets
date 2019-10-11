CREATE TABLE `client_sources` (
  `client_source_id` int(11) NOT NULL,
  `client_source_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`client_source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO client_sources VALUES("1","CEO");
INSERT INTO client_sources VALUES("2","FACEBOOK NETWORK");
INSERT INTO client_sources VALUES("3","GOOGLE");
INSERT INTO client_sources VALUES("4","WORD OF MOUTH");
INSERT INTO client_sources VALUES("5","SUGGESTED");
INSERT INTO client_sources VALUES("6","EXTERNAL FRR");
INSERT INTO client_sources VALUES("7","WEB");
INSERT INTO client_sources VALUES("8","PUBLIC RELATIONS");
INSERT INTO client_sources VALUES("9","ΧΡΥΣΟΣ ΟΔΗΓΟΣ");
INSERT INTO client_sources VALUES("10","TRADE SHOW");
INSERT INTO client_sources VALUES("11","ADVERTISEMENT");