select first as [First Name],last  as [Last Name],value as [Data] from ABPerson e left join ABMultiValue p on(e.Rowid = p.record_id) order by e.first;

or

SELECT zcreationdate, ztitle, zsummary, zcontent FROM znote, znotebody WHERE znote.z_pk = znotebody.zowner