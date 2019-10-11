//at dbase the field is TEXT, queries like :
/*
select count(ordertype) as c,ordertype from orders 
where daterec between '2017-05-20 00:00:00' and '2017-05-21 23:59'
group by ordertype order by ordertype


select *  from orders 
where daterec between '2017-05-20 00:00' and '2017-05-21 23:59'
*/

		Date dtp_today = new Date();
		Date dtp_start = new Date(dtp_today.getYear(), dtp_today.getMonth(),1);
		Date dtp_end = new Date(dtp_today.getYear(), dtp_today.getMonth()+1,1);
		
		String str_start = new SimpleDateFormat("yyyy-MM-dd 00:00").format(dtp_start);
		String str_end = new SimpleDateFormat("yyyy-MM-dd 23:59").format(dtp_end);
		
		OrdersDatasource OrdersDB;
		
		OrdersDB = new OrdersDatasource(this);
		OrdersDB.open();

		Cursor c = OrdersDB.get_count_of_orders(str_start, str_end);
		
	public Cursor get_count_of_orders(String start,String end){
		Cursor c = database
				.rawQuery("select count(ordertype) as c,ordertype from orders where daterec between '" + start + "' and '" + end + "' group by ordertype order by ordertype",	null); 
		c.moveToFirst();

		return c;
	}
	
	
//save the date field as :
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		txtDaterec.setText(sdf.format(new Date()));