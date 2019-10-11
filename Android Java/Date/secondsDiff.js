//http://stackoverflow.com/questions/3960661/android-difference-between-two-dates-in-seconds

			Date endDate = null;
			Date startDate = null;


			// db value
			startDate = General.getDateFromUNIX(arg0.child("when").getValue().toString());

			// now
			endDate = new Date();

			long diffInMs = endDate.getTime() - startDate.getTime();

			long diffInSec = TimeUnit.MILLISECONDS.toSeconds(diffInMs);

			if (diffInSec > 30)
				General.mes(Competition_Details.this, "Sorry is " + String.valueOf(diffInSec) + " seconds after bid.\r\n\r\nYou can use this functionality in 30sec");
			else 
			{
				Firebase db2 = new Firebase("https://testarea.firebaseio.com/competitions/" + itemKey + "/bids/" + General.userID);
				db2.removeValue();
				
				General.mes(Competition_Details.this, "You are in 30sec range, your bid deleted!");
			}