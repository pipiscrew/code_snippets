http://www.codeproject.com/KB/cs/Monitor_management_guide.aspx
http://www.codeproject.com/KB/system/display_states.aspx
http://fci-h.blogspot.com/2007/03/turn-off-your-monitor-via-code-c.html

[DllImport("user32.dll")]
static extern IntPtr SendMessage(IntPtr hWnd, uint Msg, 
              IntPtr wParam, IntPtr lParam);

const int SC_MONITORPOWER = 0xF170;
const int WM_SYSCOMMAND = 0x0112;

const int MONITOR_ON = -1;
const int MONITOR_OFF = 2;
const int MONITOR_STANBY = 1;

SendMessage(ValidHWND, WM_SYSCOMMAND, SC_MONITORPOWER, MONITOR_ON);
SendMessage(ValidHWND, WM_SYSCOMMAND, SC_MONITORPOWER, MONITOR_OFF);
SendMessage(ValidHWND, WM_SYSCOMMAND, SC_MONITORPOWER, MONITOR_STANDBY);


--<similar API to calls for SC_MONITORPOWER>

[DllImport("user32.dll", SetLastError = true)]
static extern bool PostMessage(IntPtr hWnd, uint Msg, 
              IntPtr wParam, IntPtr lParam);

[DllImport("user32.dll")]
static extern bool PostThreadMessage(uint idThread, uint Msg, 
              UIntPtr wParam, IntPtr lParam);

[DllImport("user32.dll", SetLastError=true, CharSet=CharSet.Auto)]
static extern bool SendMessageCallback(IntPtr hWnd, uint Msg, 
              UIntPtr wParam, IntPtr lParam, 
              SendMessageDelegate lpCallBack, UIntPtr dwData);

[DllImport("user32.dll", SetLastError=true, CharSet=CharSet.Auto)]
static extern bool SendNotifyMessage(IntPtr hWnd, uint Msg, 
              UIntPtr wParam, IntPtr lParam);
So, knowing this now, you should be able to choose between SendMessage and all these other ones, and use them according to your own needs, considering the following observations:

SendMessage() – Sends the specified message to a window or windows, calls the window procedure for the specified window and does not return until the window procedure has processed the message.
PostMessage() – Posts a message in the message queue associated with the thread that created the specified window and returns without waiting for the thread to process the message.
PostThreadMessage() – Posts a message to the message queue of the specified thread. It returns without waiting for the thread to process the message.
SendNotifyMessage() – Sends the specified message to a window or windows. If the window was created by the calling thread, SendNotifyMessage calls the window procedure for the window and does not return until the window procedure has processed the message. If the window was created by a different thread, SendNotifyMessage passes the message to the window procedure and returns immediately; it does not wait for the window procedure to finish processing the message.
SendMessageCallback() – Calls the window procedure for the specified window and returns immediately. After the window procedure processes the message, the system calls the specified callback function, passing the result of the message processing and an application-defined value to the callback function.

//**************************************************
//http://www.dennisbabkin.com/php/faq.php?what=wosb

/this is proper otherwise with SC_MONITORPOWER^^ on 2nd time the screen turn back for 1sec
        [DllImport("kernel32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        public static extern EXECUTION_STATE SetThreadExecutionState(EXECUTION_STATE esFlags);

        [FlagsAttribute]
        public enum EXECUTION_STATE : uint
        {
            ES_AWAYMODE_REQUIRED = 0x00000040,
            ES_CONTINUOUS = 0x80000000,
            ES_DISPLAY_REQUIRED = 0x00000002,
            ES_SYSTEM_REQUIRED = 0x00000001
            // Legacy flag, should not be used.
            // ES_USER_PRESENT = 0x00000004
        }
        
lets see two situations when waking up a screen might be necessary:
When computer automatically wakes up from a suspended power state (such as Stand-by/Sleep Mode, Hibernation or Away Mode):

Implementation of this method should be performed in the handler of the PBT_APMRESUMEAUTOMATIC notification (see more info in Q4 above). It seems like the easiest way to wake up screen is using the SetThreadExecutionState API:
//From the handler of messages for the main window
if(uMsg == WM_POWERBROADCAST)
{
	if(wParam == PBT_APMRESUMEAUTOMATIC)    //[more info]
	{
		if(bWindows2000_XP_Vista)
		{
			//Works under Windows 2000/XP/Server 2003/Vista
			SetThreadExecutionState(ES_DISPLAY_REQUIRED); //[more info]
		}
		else
		{
			//In case of earlier OS (i.e. Windows 95/98/ME) use 
			//any of the appropriate methods described below
		}
	}
}
Wake screen up on timer set by user:

The simplest way to implement this on older systems was to send the WM_SYSCOMMAND message with the SC_MONITORPOWER notification:
(NOTE: This method is not documented by Microsoft anymore and should be used only on older systems.)
if(bWindows9x)
{
	//In case of Windows 95/98/ME
	//If our app has a window, send this message to our own main window
	SendMessage(m_hMainWnd, WM_SYSCOMMAND, SC_MONITORPOWER, -1); //[more info]

	//If our app does not have a window, send this message to the desktop	
	SendMessage(GetDesktopWindow(), WM_SYSCOMMAND, SC_MONITORPOWER, -1); //[more info]
}
else if(bWindows2000_XP_Server2003)
{
	//In case of Windows 2000/XP/Server 2003
	//Broadcast this message to all top-level windows
	SendMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, -1);

	//You can also invoke the default implementation mechanism,
	//in case our app has a window
	DefWindowProc(m_hMainWnd, WM_SYSCOMMAND, SC_MONITORPOWER, -1); //[more info]
}
It also may be important to know if a screen saver is currently running (Luckily this is easy to accomplish):
//Works under any OS, except Windows 95
BOOL bScreenSaverIsOn = FALSE;
SystemParametersInfo(SPI_GETSCREENSAVERRUNNING, 0, &bScreenSaverIsOn, NULL); //[more info]

//If 'bScreenSaverIsOn' is TRUE, then the screen saver is currently running on the
//windows station of the calling process
We may also need to know if a main monitor is currently in the power saving mode (i.e. if it's off or on):
(NOTE: Unfortunately there's no direct way to establish that for the system other than Windows Vista.)
BOOL bMonitorIsOn = TRUE;
if(!bWindowsVista)
{
	//In case of any OS earlier than Windows Vista

	//The method we'll use here is a deduction of whether the monitor 
	//is in the power saving mode (i.e. off), or not (i.e. on).
	//We check that there was no user input for the amount of time 
	//more than the value for the monitor power-off timer.

	//First check if monitor power-off energy saving is activated
	BOOL bPowerOffActiv = FALSE;
	if(SystemParametersInfo(SPI_GETPOWEROFFACTIVE, 0, &bPowerOffActiv, NULL))
	{
		if(bPowerOffActiv)
		{
			//Power-off is activated
			//Then get Power-Off time-out counter (value in seconds)
			DWORD nPowerOffTimeOut = 0;
			if(SystemParametersInfo(SPI_GETPOWEROFFTIMEOUT, 0, 
				&nPowerOffTimeOut, NULL)) //[more info]
			{
				//See how long there was no user input
				//(This method works under Windows 2000, or later)
				LASTINPUTINFO lii = {0};
				lii.cbSize = sizeof(lii);
				if(GetLastInputInfo(&lii)) //[more info]
				{
					//Difference is in milliseconds (or sec * 10^-3)
					DWORD dwTickCntDiff = GetTickCount() - lii.dwTime;

					//Convert to seconds
					dwTickCntDiff /= 1000;

					//Now see if this value is more or equal to the 
					//monitor power-off time-out value
					if(dwTickCntDiff >= nPowerOffTimeOut)
						bMonitorIsOn = FALSE;
					else
						bMonitorIsOn = TRUE;
				}
			}
		}
		else
		{
			//Power-off is not activated, thus monitor is possibly on
			//(Of course screen saver might be on!)
			bMonitorIsOn = TRUE;
		}
	}

	//If 'bMonitorIsOn' is TRUE, it means that the monitor is possibly ON
	//(Note though that the screen saver might be running)
	//If 'bMonitorIsOn' is FALSE, the main monitor is probably OFF
}
else
{
	//In case of Windows Vista

	//(1) Register to receive Power Notifications when your program starts
	//    (Normally you'll do it right after the main window is created, or
	//     from the WM_INITDIALOG handler for the dialog box.)

	// #define DEVICE_NOTIFY_WINDOW_HANDLE 0
	// DEFINE_GUID(GUID_MONITOR_POWER_ON, 0x02731015, 0x4510, 0x4526, 0x99, \	
	//	0xe6, 0xe5, 0xa1, 0x7e, 0xbd, 0x1a, 0xea);

	// HPOWERNOTIFY hPwrNtfHandle = RegisterPowerSettingNotification(m_hMainWnd, 
	//	&GUID_MONITOR_POWER_ON, DEVICE_NOTIFY_WINDOW_HANDLE); //[more info]

	//(2) Define the following variable at the global scope:

	// DWORD nMonitorState = -1;	//0=Monitor is off; 1=Monitor is on

	//(3) Intercept PBT_POWERSETTINGCHANGE notification via the WM_POWERBROADCAST
	//    message and save the value of monitor status in a global variable:

	//From the handler of messages for the main window
	// if(uMsg == WM_POWERBROADCAST)
	// {
	//	if(wParam == PBT_POWERSETTINGCHANGE) //[more info]
	//	{
	//		//Make sure that the struct has correct data
	//		POWERBROADCAST_SETTING* pbs = (POWERBROADCAST_SETTING*)lParam;
	//		if(pbs && pbs->DataLength >= sizeof(DWORD))
	//		{
	//			//Save info in the global variable
	//			nMonitorState = *(DWORD*)pbs->Data;
	//		}
	//	}
	// }

	//(4) Read the global value here:

	bMonitorIsOn = nMonitorState != 0 ? TRUE : FALSE;

	//(4) Unregister Power Notifications when your program exits
	//    (Normally you'll do it from the WM_DESTROY message handler)

	// if(hPwrNtfHandle) //[more info]
	//	UnregisterPowerSettingNotification(hPwrNtfHandle);
}
One other way to wake up screen is to cancel the screen saver if it's on:
//Make sure that the screen saver is currently on
if(bScreenSaverIsOn)	//See above
{
	//First get the foreground window handle
	//(It is probably a screen saver window, but also may be NULL!)
	HWND hFrgndWnd = GetForegroundWindow(); //[more info]

	//Try to locate the screen saver window by its class name
	//(Works for older Operating Systems)
	HWND hScrSvrWnd = FindWindow("WindowsScreenSaverClass", NULL); //[more info]
	if(hScrSvrWnd)
	{
		//Close it, if it's a real window
		if(IsWindow(hScrSvrWnd)) 	//[more info]
			PostMessage(hScrSvrWnd, WM_CLOSE, NULL, NULL); //[more info]
	}
	else if(hFrgndWnd)
	{
		//If the method above didn't work 
		//try to close the foreground window
		if(IsWindow(hFrgndWnd))
			PostMessage(hFrgndWnd, WM_CLOSE, NULL, NULL);
	}

	//If screen saver is password-protected it's running on a separate desktop
	//(Works under Windows 2000/XP/Server 2003/Vista)
	HDESK hDesk = OpenDesktop("Screen-saver", 0, FALSE, 
		DESKTOP_READOBJECTS | DESKTOP_WRITEOBJECTS); //[more info]
	if(hDesk)
	{
		//Enumerate all windows & close visible ones
		EnumDesktopWindows(hDesk, EnumDesktopWindowsProc, 
			(LPARAM)NULL); 	//[more info]
		CloseDesktop(hDesk);
	}
}

//The desktop window enumeration function is defined like this
BOOL EnumDesktopWindowsProc(HWND hWnd, LPARAM lParam)
{
	if(IsWindowVisible(hWnd))
	{
		//Close this window
		PostMessage(hWnd, WM_CLOSE, NULL, NULL);
	}

	return TRUE;
}
And lastly, one sure way to wake up screen, or cancel a screen saver, is to emulate the mouse move:
(NOTE: This method works on older Operating Systems, other than Windows Vista.)
//First we need to know that the monitor is off (i.e. it is in a power saving mode)
//(This is important since if the monitor is on, this may mean that a user
// is currently working with the system and thus we should not do any "false" 
// mouse movements at this point!)
//Second, we need to know that the screen saver is currently running
//(Even if the monitor is not in a power saving mode)
if(bMonitorIsOn == FALSE ||	//See above
	bScreenSaverIsOn)	//See above
{
	//Get current mouse pointer position
	POINT pnt;
	GetCursorPos(&pnt); 	//[more info]

	//Get location in the middle of the screen
	int x_ctr = GetSystemMetrics(SM_CXSCREEN) / 2; 	//[more info]
	int y_ctr = GetSystemMetrics(SM_CYSCREEN) / 2;

	//See if mouse is at the same exact spot
	//(If it is, the screen saver will not be terminated)
	#define CLEARANCE_VAL 8
	while(abs(x_ctr - pnt.x) < CLEARANCE_VAL &&
		abs(y_ctr - pnt.y) < CLEARANCE_VAL)
	{
		//Move a little to the side
		x_ctr += CLEARANCE_VAL;
		y_ctr += CLEARANCE_VAL;
	}

	//Emulate move of the mouse cursor
	SetCursorPos(x_ctr, y_ctr); 	//[more info]
}