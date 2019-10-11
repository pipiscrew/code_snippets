//http://stackoverflow.com/questions/3300695/sharing-data-between-tabs/3301533#3301533
//http://stackoverflow.com/questions/9308973/tabhost-sending-data-between-activites


the correct way is setting a static field into the activity that creates the tabs

 public class greformanews extends TabActivity {

       public static String JorgesysTitle;
...
...
...
so in your Activity defined in tab 1

 @Override
 protected void onPause() { 
    greformanews.JorgesysTitle = "JORGESYS =)";
 super.onPause();
}
in your Activity defined in tab 2

//get  value defined in Activity 1 !:)
String Title =  greformanews.JorgesysTitle