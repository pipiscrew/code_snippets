//http://stackoverflow.com/questions/10361243/check-internet-connection-in-android-and-reload-the-activity-if-it-is-not-availa

private AlertDialog makeAndShowDialogBox(){
    AlertDialog myQuittingDialogBox = 

        new AlertDialog.Builder(this) 
        //set message, title, and icon
        .setTitle("Terminator") 
        .setMessage("Are you sure that you want to quit?") 
        .setIcon(R.drawable.ic_menu_end_conversation)

        .setPositiveButton("Retry", new DialogInterface.OnClickListener() { 
            public void onClick(DialogInterface dialog, int whichButton) { 
             //whatever should be done when answering "YES" goes here
            }              
        })//setPositiveButton
        .setNegativeButton("NO", new DialogInterface.OnClickListener() { 
            public void onClick(DialogInterface dialog, int whichButton) { 
             //whatever should be done when answering "NO" goes here
         } 
        })//setNegativeButton

        .create();

        return myQuittingDialogBox;
}