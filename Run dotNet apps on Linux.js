//http://www.spacejock.com/yWriter5_Linux.html

1-
All my apps need the mono visualbasic library to run. Use the Synaptic Package Manager or enter the following at the command line:

sudo apt-get install libmono-microsoft-visualbasic8.0-cil

You should also install the MS core fonts from "restricted-packages": sudo apt-get install ttf-mscorefonts-installer

(It doesn't hurt to run this even if they're already installed.)

2-
Possible error message on Ubuntu 10.10:

The assembly mscorlib.dll was not found or could not be loaded. It should have been installed in the /usr/lib/mono/1.0/mscorlib.dll' directory.

The solution is to execute the following in a terminal window:

$ cd /usr/lib/mono
$ sudo ln -s 2.0 1.0

Your installation of Mono is older than 2.4

If you're running mono 2.2 or earlier you must upgrade to mono 2.4 or later if you want to run any of my apps on Linux. You'll find instructions on installing mono-2.6 from source (http://www.spacejock.com/yWriter5_Linux.html#InstallingMono)

3-
To run yWriter5, open a terminal window, first make sure you're in the path containing 'yWriter5.exe':

cd ~/yWriter5/bin (Enter)

Then type:

mono yWriter5.exe (Enter)

Program configurations and log files are stored in ~/.config/Spacejock Software/yWriter5

If the program uses data files (e.g. yWriter5, Sonar3, etc) it may also create a folder called ~/yWriter5.
You can also create a desktop shortcut/launcher using mono ~/yWriter5/bin/yWriter5.exe as the command line


4-
These instructions are for Ubuntu 9.04 or EARLIER


How to install mono-2.6 and mono-basic-2.6 in Ubuntu linux


I just downloaded the source for mono-2.6 and mono-basic-2.6, compiled them both, and yWriter5 ran perfectly on Ubuntu. The only issue is whether installing mono-2.6 in this way destroys the existing Mono install, but since I don't use any other mono apps on linux I don't really care.

Here are the steps I used. First, open a terminal window (In Ubuntu click Applications, accessories, terminal.)

You need to copy or paste the commands in italics below, or else download, unpack and run the script in this file to have Ubuntu do everything for you. (After unzipping, run the script with sudo sh mono26.sh)

cd ~

sudo su
(enter your regular password - you're now the root user)

wget http://ftp.novell.com/pub/mono/sources/mono/mono-2.6.tar.bz2
tar -jxvf mono-2.6.tar.bz2
cd mono-2.6
./configure

At this point, the configure script may stop with an error. On Ubuntu you may see a message about installing bison or gettext. If so, run these commands:

apt-get install bison
apt-get install gettext

Now you can run ./configure again. If you see a message about glib-2.0 missing, run this command:

apt-get install libglib2.0-dev

Keep running ./configure and using apt-get on the packages Ubuntu reports as missing until the error messages stop. Then proceed:

make
make install

Mono 2.6 is now installed. Change back to the original folder so we can do mono-basic:

cd ..

wget http://ftp.novell.com/pub/mono/sources/mono-basic/mono-basic-2.6.tar.bz2
tar -jxvf mono-basic-2.6.tar.bz2
cd mono-basic-2.6
./configure
make
make install

cd ..

Run this to make sure the latest version is installed and running properly:

mono -V
(upper case V)

Now exit from the root shell: by typing 

exit

An example: installing yWriter5 on Linux

First, make sure you're in your home directory by typing

cd ~

now enter

wget http://www.spacejock.com/files/yWriter5.zip

and then

unzip yWriter5.zip

This will create a yWriter5 directory, with a bin folder inside it. So, enter

cd yWriter5
cd bin

and now run yWriter with this command:

mono yWriter5.exe

You can set up a shortcut on the Ubuntu desktop by specifying ~/yWriter/bin as the path, mono as the application and yWriter5.exe as the parameter. You can also run yWriter by right-clicking the yWriter5.exe file and selecting 'run with mono'