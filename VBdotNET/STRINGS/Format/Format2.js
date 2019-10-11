'http://blog.stevex.net/string-formatting-in-csharp/

Return String.Format("{0:00}", 3)
ayto gurizei : 03



**numbers1**
c 	Currency 	{0:c} 	$1.42 	-$12,400
d 	Decimal (Whole number) 	{0:d} 	System.FormatException 	-12400
e 	Scientific 	{0:e} 	1.420000e+000 	-1.240000e+004
f 	Fixed point 	{0:f} 	1.42 	-12400.00
g 	General 	{0:g} 	1.42 	-12400
n 	Number with commas for thousands 	{0:n} 	1.42 	-12,400
r 	Round trippable 	{0:r} 	1.42 	System.FormatException
x 	Hexadecimal 	{0:x4} 	System.FormatException 	cf90



**numbers2**
0 	Zero placeholder 	{0:00.0000} 	1500.4200 	Pads with zeroes.
# 	Digit placeholder 	{0:(#).##} 	(1500).42 	
. 	Decimal point 	{0:0.0} 	1500.4 	
, 	Thousand separator 	{0:0,0} 	1,500 	Must be between two zeroes.
,. 	Number scaling 	{0:0,.} 	2 	Comma adjacent to Period scales by 1000.
% 	Percent 	{0:0%} 	150042% 	Multiplies by 100, adds % sign.
e 	Exponent placeholder 	{0:00e+0} 	15e+2 	Many exponent formats available.


**dates**
d 	Short date 	10/12/2002
D 	Long date 	December 10, 2002
t 	Short time 	10:11 PM
T 	Long time 	10:11:29 PM
f 	Full date & time 	December 10, 2002 10:11 PM
F 	Full date & time (long) 	December 10, 2002 10:11:29 PM
g 	Default date & time 	10/12/2002 10:11 PM
G 	Default date & time (long) 	10/12/2002 10:11:29 PM
M 	Month day pattern 	December 10
r 	RFC1123 date string 	Tue, 10 Dec 2002 22:11:29 GMT
s 	Sortable date string 	2002-12-10T22:11:29
u 	Universal sortable, local time 	2002-12-10 22:13:50Z
U 	Universal sortable, GMT 	December 11, 2002 3:13:50 AM
Y 	Year month pattern 	December, 2002

**Custom date formatting:**
dd 	Day 	{0:dd} 	10
ddd 	Day name 	{0:ddd} 	Tue
dddd 	Full day name 	{0:dddd} 	Tuesday
f, ff, … 	Second fractions 	{0:fff} 	932
gg, … 	Era 	{0:gg} 	A.D.
hh 	2 digit hour 	{0:hh} 	10
HH 	2 digit hour, 24hr format 	{0:HH} 	22
mm 	Minute 00-59 	{0:mm} 	38
MM 	Month 01-12 	{0:MM} 	12
MMM 	Month abbreviation 	{0:MMM} 	Dec
MMMM 	Full month name 	{0:MMMM} 	December
ss 	Seconds 00-59 	{0:ss} 	46
tt 	AM or PM 	{0:tt} 	PM
yy 	Year, 2 digits 	{0:yy} 	02
yyyy 	Year 	{0:yyyy} 	2002
zz 	Timezone offset, 2 digits 	{0:zz} 	-05
zzz 	Full timezone offset 	{0:zzz} 	-05:00
: 	Separator 	{0:hh:mm:ss} 	10:43:20
/ 	Separator 	{0:dd/MM/yyyy} 	10/12/2002