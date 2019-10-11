//http://www.basic4ppc.com/forum/basic4android-updates-questions/9467-dip.html

The dimensions you enter in the designer are dip values.

You can design your layouts in the Designer.
Even if you design for a 320 * 480 pixels density 160 device (emulator)
it will be shown correctly on a device with 480 * 720 pixels density 240.
Where you need to add some code is for a device with 480 * 800 pixels dendity 240 because of the 80 extra pixels that you must handle.

Have a look at chapter 5. Screen sizes and resolutions in the Beginner's Guide.

--

A dip is a density independent pixel.
When you set in the code positions and sizes of view it is bette to declare them with dips.

Button1.Width = 60dip (don't confuse it with dpi's dots per inch !)

The above code means that the physical width of the butoon is:
60 pixels on a device with the standard density of 160, scale 1.
90 pixels on a device with a density of 240, scale 1.5.
45 pixels on a device with a density of 120, scale 0.75.
That means that the OS mutiplies the dimension by the scale factor. 

--

//http://www.basic4ppc.com/android/help/core.html#keywords_diptocurrent
DipToCurrent (Length As Int) As Int

Scales the value, which represents a specific length on a default density device (Density = 1.0),
to the current device.
For example, the following code will set the width value of this button to be the same physical size
on all devices.
Button1.Width = DipToCurrent(100)

Note that a shorthand syntax for this method is available. Any number followed by the string 'dip'
will be converted in the same manner (no spaces are allowed between the number and 'dip').
So the previous code is equivalent to:
Button1.Width = 100dip 'dip -> density independent pixel