		private Calendar calendar;
        SimpleDateFormat sdf = new SimpleDateFormat("yyMMddHHmm0",Locale.US);
        btn_date.setText(sdf.format(calendar.getTime()));