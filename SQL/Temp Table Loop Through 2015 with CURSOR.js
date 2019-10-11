//http://www.pipiscrew.com/2015/12/sql-temporary-table-cursor-loop/
//http://msdn.microsoft.com/en-us/library/ms180169.aspx

--variable
DECLARE @TBL_STR nvarchar(255)
 
--IF TEMPORARY TABLE EXISTS DROP IT!!
IF object_id('tempdb..#RESULTSET') IS NOT NULL
BEGIN
   DROP TABLE #RESULTSET
END
 
--CREATE TEMPORARY TABLE
CREATE TABLE #RESULTSET
( TBL_STR nvarchar(255) );
 
--INSERT VALUES TO TEMPORARY
insert into #RESULTSET values ('cat1');
insert into #RESULTSET values ('cat2');
insert into #RESULTSET values ('cat3');
 
--GET ALL TEMPORARY RECORDS
DECLARE rec_cursor CURSOR FOR
    SELECT * FROM #RESULTSET
 
OPEN rec_cursor;
--GET ALL TEMPORARY RECORDS
 
--get the first record
FETCH NEXT FROM rec_cursor
INTO @TBL_STR;
 
 
--FOR ALL RECORDS IN ORDERS
WHILE @@FETCH_STATUS = 0
BEGIN
    insert into aa (aa_title) values (@TBL_STR);
 
    FETCH NEXT FROM rec_cursor
    INTO @TBL_STR;
END



//////////////////////////////////////////////////////////////////////////////
--------------the same but in the loop construct dynamic SQL and execute it
//////////////////////////////////////////////////////////////////////////////

--variable
DECLARE @TBL_STR nvarchar(255)
 
--IF TEMPORARY TABLE EXISTS DROP IT!!
IF object_id('tempdb..#RESULTSET') IS NOT NULL
BEGIN
   DROP TABLE #RESULTSET
END
 
--CREATE TEMPORARY TABLE
CREATE TABLE #RESULTSET
( TBL_STR nvarchar(255) );
 
--INSERT VALUES TO TEMPORARY
insert into #RESULTSET values ('cat1');
insert into #RESULTSET values ('cat2');
insert into #RESULTSET values ('cat3');
 
--GET ALL TEMPORARY RECORDS
DECLARE rec_cursor CURSOR FOR
    SELECT * FROM #RESULTSET
 
OPEN rec_cursor;
--GET ALL TEMPORARY RECORDS
 
--get the first record
FETCH NEXT FROM rec_cursor
INTO @TBL_STR;
 
--VARIABLE FOR SQL EXECUTION
Declare @Sql nvarchar(max)
 
--FOR ALL RECORDS IN ORDERS
WHILE @@FETCH_STATUS = 0
BEGIN
    --SET SQL VARIABLE (WARNING : dont use double quote, but double single quote)
    Set @Sql = 'Declare @' + (@TBL_STR) + 'Id int 
            Set @' + (@TBL_STR) + 'Id = (Select PlayerX_Id from PlayerXs Where PlayerX_Code=''' + (@TBL_STR) + ''') 
            
            Insert Into PLAYERS(Player_ID, PlayerX_ID,PlayerXValue_Order,PlayerXY) 
            Select p.Player_ID, @' + (@TBL_STR) + 'Id, 1, Convert(nvarchar(10), p.Player_ID) + ''-'' + Convert(nvarchar(10),@' + (@TBL_STR) + 'Id) 
            from SONE_Players sp 
            Inner Join Players p on p.Player_Q_ID=sp.ID 
            Where p.Player_ID not in 
                    (Select Player_ID from PLAYERS Where PlayerXY=Convert(nvarchar(10), p.Player_ID) + ''-'' + Convert(nvarchar(10),@' + (@TBL_STR) + 'Id)) 
      '
    --print @Sql
    --return
    exec (@Sql) --DYNAMIC SQL EXECUTION
 
    FETCH NEXT FROM rec_cursor
    INTO @TBL_STR;
END