'source
'http://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx
'http://www.vb-helper.com/howto_net_date_tostring_custom.html

Now.ToString("MMMM %d yyyy")

++

        Dim ci As New Globalization.CultureInfo("en-US")

        txtDate.Text = Now.ToString("MMMM %d yyyy", ci)

format always to ENG!



    * d - Short date
    * %d - Day number
    * M?d - Month and day number
    * dd - Day number, two digits
    * ddd - Abbreviated day name
    * dddd - Full day name
    * f - Full (long date, short time)
    * %f - Fractions of second, one digit
    * s^f - Seconds and fractions of second, one digit
    * ff - Fractions of second, two digits
    * fff - Fractions of second, three digits
    * ffff - Fractions of second, four digits
    * fffff - Fractions of second, five digits
    * ffffff - Fractions of second, six digits
    * fffffff - Fractions of second, seven digits
    * g - General
    * %g - Era (eg. A.D.)
    * y-g - Year and era (eg. 5-A.D.)
    * gg - Era (eg. A.D.)
    * h - Hour (1-12) (Doesn't seem to work)
    * %h - Hour (1-12)
    * h-m - Hour and minute
    * hh - Hour (01-12)
    * H - Hour (0-23) (Doesn't seem to work)
    * HH - Hour (00-23)
    * m - Month name and date
    * %m - Minute (0-59)
    * hh_m - Hour and minute (0-59)
    * mm - Minute (00-59)
    * M - Month name and date
    * %M - Month number (1-12)
    * M+d - Month number and day number
    * MM - Month number (01-12)
    * MMM - Month abbreviation
    * MMMM - Month name
    * s - Standard sortable date/time
    * %s - Seconds (0-59)
    * s^ff - Seconds (0-59) and fraction of seconds
    * ss - Seconds (00-59)
    * t - Long time
    * %t - First letter of AM/PM designator
    * hh+t - Hour and first letter of AM/PM designator
    * tt - AM/PM designator
    * y - Short date
    * %y - Year (0-99)
    * m-y - Month and year
    * yy - Year (00-99)
    * yyyy - Year (0000-9999)
    * z - Doesn't work
    * %z - Whole hour time zone (-12 to +13)
    * Zone:z - Zone - and whole hour time zone (-12 to +13)
    * zz - Whole hour time zone (-12 to +13) with two digits
    * zzz - Time zone in hours and minutes}) 