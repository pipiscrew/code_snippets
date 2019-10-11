I used this to get smooth streaming continue to run under lock, called after my MainPage has loaded:

PhoneApplicationService
.Current.ApplicationIdleDetectionMode = IdleDetectionMode.Disabled;

/Pix 