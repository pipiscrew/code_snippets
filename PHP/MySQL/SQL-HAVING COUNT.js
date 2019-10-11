//http://stackoverflow.com/questions/23509404/mysql-select-rows-that-match-multiple-rows-in-related-table

SELECT e.Exercise_Name, 
p.Exercise_Plane 
FROM exercise_rolladex e
INNER JOIN exercise_has_planes h ON h.Exercise_ID=e.Exercise_ID
INNER JOIN exercise_planes p ON p.Exercise_Plane_ID=h.Exercise_Plane_ID
WHERE p.Exercise_Plane_ID IN(2,1)
GROUP BY e.Exercise_ID
HAVING COUNT(DISTINCT h.Exercise_Plane_ID ) >= 2