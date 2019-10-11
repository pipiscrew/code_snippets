'gia sql server 2005
select * from sys.Tables order by 1

'gia sql sever 2000
select * from sysobjects where xtype = 'u' order by 1



'this working in 2000/2005 only user TABLES
SELECT name FROM sysdatabases where sid <> 0x01 order by name