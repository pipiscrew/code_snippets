//http://www.codeproject.com/Articles/119293/Using-SQLite-Database-with-Android

	SQLiteDatabase db=this.getWritableDatabase();
	ContentValues cv=new ContentValues();
	cv.put(colName, emp.getName());
	cv.put(colAge, emp.getAge());
	cv.put(colDept, emp.getDept());
	return db.update(employeeTable, cv, colID+"=?", new String []{String.valueOf(emp.getID())});
	
	
//

		 	ContentValues cv=new ContentValues();
			cv.put(colDeptID, 1);
			cv.put(colDeptName, "Sales");
		
			db.insert(deptTable, colDeptID, cv);
			cv.put(colDeptID, 2);
			cv.put(colDeptName, "IT");
			db.insert(deptTable, colDeptID, cv);
			cv.put(colDeptID, 3);
			cv.put(colDeptName, "HR");
			db.insert(deptTable, colDeptID, cv);
			db.insert(deptTable, colDeptID, cv);