//http://stackoverflow.com/a/5016434

DELETE n1 FROM names n1, names n2 WHERE n1.id > n2.id AND n1.name = n2.name