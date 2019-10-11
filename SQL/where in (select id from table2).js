//http://www.codeproject.com/Articles/52500/Using-SQL-Server-Table-Variables-to-Eliminate-the

//where result needed only once
UPDATE dbo.MEMBERS
SET MB_COUNT = A.MB_COUNT
FROM
(
	SELECT
	COMPANY_ID,
	COUNT(*) AS MB_COUNT
	FROM
	dbo.MEMBERS
	WHERE
	RECORD_TYPE = 'I'
	AND	COMPANY_ID IS NOT NULL
	GROUP BY COMPANY_ID
) A
WHERE
MB_ID = A.COMPANY_ID

//when the result needed multiple times
ALTER PROCEDURE [dbo].[p_adbook_companies_listwhere_category] @primary_categ_id INT
AS
--create temporary table
DECLARE @whereParent TABLE (parent_id INT)

--insert the ids to temporary table
INSERT INTO @whereParent
SELECT categ_id
FROM adbook_categories
WHERE parent_id = @primary_categ_id

--select the real table where in temporary table
SELECT *
FROM adbook_companies
WHERE categ_id1 IN (
		SELECT parent_id
		FROM @whereParent
		)
	OR categ_id2 IN (
		SELECT parent_id
		FROM @whereParent
		)
	OR categ_id3 IN (
		SELECT parent_id
		FROM @whereParent
		)
	OR categ_id4 IN (
		SELECT parent_id
		FROM @whereParent
		)

