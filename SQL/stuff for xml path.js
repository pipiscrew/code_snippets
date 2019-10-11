select icd.IcdCode as Icd10Code, icd.IcdName as Icd10, count(*) as PatientCount,
STUFF((
            SELECT ',' + CAST(ID as varchar)
            FROM Diagnoses
            FOR XML PATH('')
            ), 1, 1, '')

from Patients
left join Diagnoses on Diagnoses.PatientID = Patients.PatientID
left join Icds icd on icd.IcdID = Diagnoses.IcdID
group by icd.IcdCode, icd.IcdName 
order by icd.IcdCode, icd.IcdName

//working
//https://sqlandme.com/2011/04/27/tsql-concatenate-rows-using-for-xml-path/
select patientid, STUFF((
            SELECT ',' + CAST(xc.ID as varchar)
            FROM Diagnoses as xc
			where xc.PatientID = Patients.PatientID
            FOR XML PATH('')
            ), 1, 1, '')
from Patients



https://www.wiseowl.co.uk/blog/s2511/stuff-xml.htm
https://sqlwhisper.wordpress.com/2013/03/24/stuff-and-for-xml-path-for-string-concatenation/
https://stackoverflow.com/a/31212160

-----

for mysql 
MYSQL - https://stackoverflow.com/a/20738194 GROUP_CONCAT
MySQL GROUP_CONCAT Function - Features, Examples and Equivalents - http://www.sqlines.com/mysql/functions/group_concat