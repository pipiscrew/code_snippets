The install is actually a virtual Android (Froyo 2.2 build) and is MUCH faster than the emulator!

//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/11223-super-fast-alternative-emulator-x86-android.html

How to install Android x86 2.2 (with Virtual Box) GUIDE
//http://androidspin.com/2011/01/24/howto-install-android-x86-2-2-in-virtualbox/

INSTALLATION
======================================
First of all, follow this excellent guide for setting up and installing

How to install Android x86 2.2 (with Virtual Box)

At STEP 5 you can go straight for the Live CD option for initial testing


BEFORE LAUNCHING THE VIRTUAL ANDROID
=========================================
set the VirtualBox machine's network mode (under Settings > Network) to Bridged Adapter and accept the defaults. Your PC and emulated PC will now have IP addresses in the same range

Double-Click the virtual Android entry to launch the virtual x86 Android
Once the emulator is running, press Alt + F1
Type netcfg then note the IP address ** (usually starting with 192.168.x.xxx)
Return to the emulator by pressing Alt + F7

Getting B4A to communicate with Android
======================================
Open the Windows command prompt (Start > Run > CMD)
Navigate to wherever Android\platform-tools folder is
Type adb connect 192.168.x.xxx (the address noted at ** above)

Try compiling a B4A project. If everything is good your app/game should appear (very quickly) in the virtual Android

TIP -- You can create a *.bat file to aid in establishing the connection. This is something you can simply double-click to carry out command line instructions. My own "Android-Connect.bat" file contains the following. Change the directory and IP address as necessary
Code:
d:
cd android
cd platform-tools
adb connect 192.168.8.102
exit
Happy coding, and enjoy WARP SPEED!