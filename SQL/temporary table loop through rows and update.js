ALTER PROCEDURE [dbo].[p_adbook_companies_listwhere_category2] @primary_categ_id INT
AS
SET NOCOUNT ON;

--create temporary table
DECLARE @whereParent TABLE (parent_id INT)

--insert the ids to temporary table
INSERT INTO @whereParent
SELECT categ_id
FROM adbook_categories
WHERE parent_id = @primary_categ_id

--create a table with an extra field id identity
DECLARE @exportTBL TABLE (
	id INT IDENTITY(1, 1)
	,companyid INT
	,comp_title NVARCHAR(250)
	,comp_name NVARCHAR(250)
	,comp_address NVARCHAR(250)
	,phone NVARCHAR(250)
	,fax NVARCHAR(250)
	,email NVARCHAR(250)
	,url NVARCHAR(250)
	,executive_titletxt NVARCHAR(250)
	,executive_titlejoin NVARCHAR(250)
	,executive_name NVARCHAR(250)
	);

--make the query we would like (our ID increased automatically)
INSERT INTO @exportTBL
SELECT companyid
	,comp_title
	,comp_name
	,comp_address
	,phone
	,fax
	,adbook_companies.email
	,url
	,adbook_executive_titles.executive_title AS [executive_titletxt]
	,adbook_executives.executive_title AS [executive_titlejoin]
	,executive_name
FROM adbook_companies
LEFT JOIN adbook_executives ON adbook_executives.executive_company_id = adbook_companies.companyid
LEFT JOIN adbook_executive_titles ON adbook_executive_titles.executive_title_id = adbook_executives.executive_title_id
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
ORDER BY comp_title

--here loop through temporary table rows by ID
DECLARE @i INT
DECLARE @n INT
DECLARE @val INT
DECLARE @prevval INT

SELECT @i = min(id)
	,@n = max(id)
FROM @exportTBL

SET @prevval = - 1

WHILE @i <= @n
BEGIN
	SELECT @val = companyid
	FROM @exportTBL
	WHERE id = @i

	--if the record has the same companyid zero it
	IF (@prevval = @val)
	BEGIN
		UPDATE @exportTBL
		SET comp_title = ''
			,comp_name = ''
			,comp_address = ''
			,phone = ''
			,fax = ''
			,email = ''
			,url = ''
		WHERE id = @i
	END
	ELSE
		SET @prevval = @val

	SET @i = @i + 1
END

--select the temporary table
SELECT companyid
	,comp_title
	,comp_name
	,comp_address
	,phone
	,fax
	,email
	,url
	,executive_titletxt
	,executive_titlejoin
	,executive_name
FROM @exportTBL

