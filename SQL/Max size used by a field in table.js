//nvarchar, varchar
select max(len(fieldA)) from tbl

//for ntext u have to cast
select max(len(CONVERT(NVARCHAR(MAX), prd_name))) from adbook_company_products