//http://stackoverflow.com/questions/18268518/firebase-rooms-with-limited-number-of-participants

        Firebase db5 =  new Firebase(General.baseURL + "/companies/" + Company_ID + "/comp/" + Competition_Key + "/causes/"  + cause_userChoiceID);

        final float causeGOAL2 = causeGoal;
        db5.runTransaction(new Transaction.Handler() {

            @Override
            public Result doTransaction(MutableData currentData) {
                Float currentGoalSUM ;

                if (currentData.child("goalSUM").getValue()==null)
                    currentGoalSUM=0F;
                else
                    currentGoalSUM = Float.parseFloat( currentData.child("goalSUM").getValue().toString());

                currentData.child("goal").setValue(causeGOAL2);
                currentData.child("goalSUM").setValue(currentGoalSUM+Competition_Credit);

                return Transaction.success(currentData);
            }

            @Override
            public void onComplete(FirebaseError arg0, boolean arg1, DataSnapshot arg2) {
                // TODO Auto-generated method stub

            }

        }); 