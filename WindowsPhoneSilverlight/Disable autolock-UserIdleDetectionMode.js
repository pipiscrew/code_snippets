//in case this operation takes longer than the screen timeout, we need to disable
//http://msdn.microsoft.com/en-us/library/microsoft.phone.shell.phoneapplicationservice.useridledetectionmode%28v=vs.92%29.aspx

            PhoneApplicationService.Current.UserIdleDetectionMode = IdleDetectionMode.Disabled;
            
			PhoneApplicationService.Current.ApplicationIdleDetectionMode = IdleDetectionMode.Disabled;
			
You can use PhoneApplicationService.Current.UserIdleDetectionMode to stop 
the screen backlight timing out and stop the screen from locking.

You can also use PhoneApplicationService.Current.ApplicationIdleDetectionMode to 
allow the application to keep running under a lock screen.

//http://msdn.microsoft.com/en-us/library/microsoft.phone.shell.phoneapplicationservice.useridledetectionmode%28v=vs.92%29.aspx
Enabled 	When UserIdleDetectionMode is set to enabled, the operating system will
 consider an application to be idle when no touch events are detected. When ApplicationIdleDetectionMode is set to enabled, the operating system will pause the active application when the lock screen is engaged.
Disabled 	When UserIdleDetectionMode is set to disabled, the operating system will
 not consider an application to be idle when no touch events are detected. When ApplicationIdleDetectionMode is set to disabled, the active application will continue to run when the lock screen is engaged.
