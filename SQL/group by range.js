//https://stackoverflow.com/a/233223
select t.range as [score range], PrefectureName, me8odos , count(*) as peoplecounter
from (
  select case  
    when datediff(year, BirthDate, GETDATE()) between 0 and 24 then '0 - 24'
    when datediff(year, BirthDate, GETDATE()) between 25 and 44 then '25 - 44'
    when datediff(year, BirthDate, GETDATE()) between 45 and 64 then '45 - 64'
    when datediff(year, BirthDate, GETDATE()) between 65 and 74 then '65 - 74'
    else '75+' end as range,
	Prefectures.Name as PrefectureName, TherapyMethods.Name as me8odos
  from Patients
	left join Prefectures on Prefectures.ID = Patients.PrefectureID
	left join Therapies on Therapies.PatientID = Patients.PatientID
	left join TherapyMethods on TherapyMethods.ID = Therapies.MethodID
	where  (Therapies.Type ='entry' and Therapies.Increment=1) and TherapyMethods.Name is not null
) t
group by t.range, PrefectureName, me8odos