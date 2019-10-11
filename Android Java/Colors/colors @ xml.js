//http://stackoverflow.com/questions/8680262/android-system-color-constants

You should have a file in res/values called colors.xml, it should look like this:

<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="white">#FFFFFF</color>
    <color name="grey">#7A7A7A</color>
    <color name="background">#0044AA</color>
    <color name="bluelight">#449DEF</color>
    <color name="bluedark">#2F6699</color>
    <color name="greenlight">#70C656</color>
    <color name="greendark">#53933F</color>
    <color name="orangelight">#F3AE1B</color>
    <color name="orangedark">#BB6008</color>
    <color name="black">#000000</color>
</resources>


//Then you can just call the color in xml like this:

android:background="@color/greenlight"
