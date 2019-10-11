UPDATE se ena pinaka kai ADD NEW se allon

CREATE PROCEDURE [s_TomDokimiaANA8ESH]
   @reqid [int],
   @sectid [int],
   @testcode [int],
   @labid [int],
   @date1 [smalldatetime],
   @date2 [smalldatetime],
   @date3 [smalldatetime]
AS

update dokimesaithshs set tomeas = @sectid,desmeysh = 12 where code = @testcode

INSERT INTO REQSECLAB

values (@reqid,@sectid,@labid,@testcode,@date1,@date2,@date3,'','','')
GO