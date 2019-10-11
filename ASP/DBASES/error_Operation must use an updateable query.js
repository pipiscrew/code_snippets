Operation must use an updateable query

This is almost always a permissions issue. Be sure that the MDB file is in a folder where IUSR_<machineName> and IWAM_<machineName> have read/write access (because the anonymous user needs to create an .LDB file when modifying the database). If you are using Windows Authentication, make sure all authenticated users belong to a group that has read/write permissions on the folder where the database exists, and if you can't use a group, step through each user and check that they have sufficient privileges



conclusion:
folder security > everyone all checked
