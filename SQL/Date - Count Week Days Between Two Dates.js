//https://blog.sqlauthority.com/2017/07/23/count-week-days-two-dates-interview-question-week-132/

DECLARE @FirstDate DATETIME
SET @FirstDate = '2017/07/01'
DECLARE @SecondDate DATETIME
SET @SecondDate = '2017/07/31'
 
SELECT COUNT(DISTINCT number)
FROM master..spt_values
WHERE
 CAST(number AS INT) 
    BETWEEN DATEPART(dy, @FirstDate) AND DATEPART(dy, @SecondDate)
AND (DATEPART(dw, DATEADD(d, number, @FirstDate)) IN (2,3,4,5,6))
GO


//OR

DECLARE @FirstDate DATETIME
SET @FirstDate = '2017/07/01'
DECLARE @SecondDate DATETIME
SET @SecondDate = '2017/07/31'
SELECT
(DATEDIFF(dd, @FirstDate, @SecondDate) + 1)
-(DATEDIFF(wk, @FirstDate, @SecondDate) * 2)
-(CASE WHEN DATENAME(dw, @FirstDate) = 'Sunday' THEN 1 ELSE 0 END)
-(CASE WHEN DATENAME(dw, @SecondDate) = 'Saturday' THEN 1 ELSE 0 END)
As NoOfWeekDays