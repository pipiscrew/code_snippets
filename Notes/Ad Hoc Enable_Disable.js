'http://www.windowsnetworking.com/kbase/WindowsTips/WindowsVista/AdminTips/Security/HowtoDisableAdHocWirelessConnectionsonVista.html

Windows Vista won’t automatically create ad hoc wireless connections with other computers, but for greater security you may want to disable ad-hoc wireless connections entirely. You can do this by running the following Netsh command at an elevated command prompt:

netsh wlan add filter permission=denyall networktype=adhoc

To re-enable ad hoc wireless connections, run this command:

netsh wlan del filter permission=denyall networktype=adhoc