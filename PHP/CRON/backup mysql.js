//backup dbase thefaced_watertron_crm
//where user is thefaced_csp
//password is 12321312
//the file generated into one step back from public_html dir
//the folder must exists mysql_backup with CHMOD 700
mysqldump -u thefaced_csp -p12321312 thefaced_watertron_crm > mysql_backup/backup.sql