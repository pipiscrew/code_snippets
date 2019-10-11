//http://stackoverflow.com/questions/5262513/select-multiple-rows-into-one-variable-in-sql-query
DECLARE @t TABLE  (id int, ReplyText varchar(100))
INSERT INTO @t (id, ReplyText) VALUES (1, 'So Long,')
INSERT INTO @t (id, ReplyText) VALUES  (2, 'And Thanks for')
INSERT INTO @t (id, ReplyText) VALUES  (3, 'All of the Fish!')

SELECT (SELECT replytext + ' '  FROM @t FOR XML PATH('')) AS CONTENT


//example
DECLARE @tmp TABLE (ReplyText VARCHAR(MAX));

		delete from @tmp;
		
		INSERT INTO @tmp
		SELECT adbook_customers.customer_name + ', '
		FROM adbook_company_customers
		LEFT JOIN adbook_customers ON adbook_customers.customerid = adbook_company_customers.customer_id
		WHERE adbook_company_customers.company_id = (select companyid from @exportTBL WHERE id = @i)

		UPDATE @exportTBL
		SET customers = (SELECT (SELECT replytext + ' '  FROM @tmp FOR XML PATH('')) 
				)
		WHERE id = @i

		SET @prevval = @val