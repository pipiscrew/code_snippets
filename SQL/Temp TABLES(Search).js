CREATE PROCEDURE [s_GetSearchEntoleis]
   @cod [int],
   @dat1 [smalldatetime],
   @dat2 [smalldatetime]
AS

set nocount on

CREATE TABLE #temp1
   (
    date1 smalldatetime,
    username nvarchar(50),
    amount numeric(13,2)
   )

insert into #temp1
Select hem.payday ,CLI.name,hem.amount
from clientsmoves [HEM] (nolock)
LEFT JOIN payway CLI (nolock) on HEM.payway=CLI.code
where hem.clientcode = @cod and hem.payday between @dat1 and @dat2

insert into #temp1
select CL.datestart,Cl.FortwtikhNo, CL.Total
from calendar [CL] (nolock)
where cl.client = @cod and CL.datestart between @dat1 and @dat2

select convert(varchar(20),date1,103),username,amount from #temp1 order by DATE1

drop table #temp1

set nocount off
GO