delete from COM_ProductTypeFieldValueCaptions
delete from COM_ProductTypeFieldValues

DBCC CHECKIDENT(COM_ProductTypeFieldValues, reseed, 0)
DBCC CHECKIDENT(COM_ProductTypeFieldValueCaptions, reseed, 0)