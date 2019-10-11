SELECT * FROM Employees WHERE LastName='O''Brien'


Replace(lstv.ListItems(i).SubItems(2), "'", "+chr(39)+")


Original criteria that doesn't work:
   LastName = 'O'Brien'
				
Criteria that doesn't work with FindFirst:
   LastName = 'O''Brien'
				
Criteria that does work with FindFirst:
   LastName = 'O' & chr(39) & 'Brien'
