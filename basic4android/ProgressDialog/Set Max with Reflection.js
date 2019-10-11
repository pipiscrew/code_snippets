//http://www.basic4ppc.com/forum/basic4android-updates-questions/13649-view-show-progress-progressbar-no-max-property.html#post77181

IndexMax = 250
Dim rflBar As Reflector
rflBar.Target = ProgressBar1
rflBar.RunMethod2("setMax", IndexMax, "java.lang.int")



//OR
//http://www.basic4ppc.com/forum/basic4android-updates-questions/15441-can-you-change-progress-bars-total-100-something-else.html#post87621
   for n = 0 to 60
      progressbar1.value = (100 * n) / 60
   next