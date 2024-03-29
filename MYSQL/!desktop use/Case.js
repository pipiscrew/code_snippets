SELECT a55.nr01,
       a55.p01 AS DateRec,
       a01.p19 AS Customer,
       a55.p06 AS NO,
       CASE a55.P05
           WHEN 1003 THEN "TIMOLOGIO+DA"
           WHEN 1004 THEN "TIMOLOGIO PWLHSHS"
           WHEN 1007 THEN "PISTWTIKO TIMOLOGIO"
           WHEN 1006 THEN "PIST TIMOLOGIO - deltio paralabhs"
           WHEN 1001 THEN "APODEI3H LIANIKHS PWLHSHS"
           WHEN 1005 THEN "DELTIO APOSTOLHS"
           WHEN 1016 THEN "EIDIKO AKYRWTIKO STOIXEIO"
           ELSE "unknown"
       END AS Eidos
FROM a55
LEFT JOIN a01 ON a55.p03 = a01.nr01
WHERE a55.p01 BETWEEN '2012-6-1' AND '2012-7-1'
ORDER BY a55.p01 DESC, a01.p19 ASC