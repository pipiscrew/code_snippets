*1*
at manifest in application tag the Holo theme must defined,
if is other than Holo the getActionBar() is null!

example:
 application tag - android:theme="@android:style/Theme.Holo.Light"

*2*
a) You also need your Activitys window to have the title visible

b)
You have to define window type as actionbar before activity render its view.

use

requestWindowFeature(Window.FEATURE_ACTION_BAR);
before calling setContentView() method.

*3*

*no working for expandable
http://stackoverflow.com/questions/4922641/sliding-drawer-appear-in-all-activities/4922740#4922740


http://stackoverflow.com/questions/20649455/navigation-drawer-with-activities-basic-concept