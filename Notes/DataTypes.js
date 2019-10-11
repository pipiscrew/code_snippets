$  - string
10 bytes + string length 0 to approximately 2 billion 

        examples Dim tempSTR as string 
                 Dim tempSTR$
% - integer
are stored as 16-bit (2-byte) numbers ranging in value from -32,768 to 32,767

        examples Dim i as integer
                 Dim i%

# - double
are stored as IEEE 64-bit (8-byte) floating-point numbers ranging in value from -1.79769313486232E308 to -4.94065645841247E-324 for negative values and from 4.94065645841247E-324 to 1.79769313486232E308 for positive values

        examples Dim TotalEuro as double
                 Dim TotalEuro#

! - single
are stored as IEEE 32-bit (4-byte) floating-point numbers, ranging in value from -3.402823E38 to -1.401298E-45 for negative values and from 1.401298E-45 to 3.402823E38 for positive values

        examples Dim Total as single
                 Dim Total!

& - long
are stored as signed 32-bit (4-byte) numbers ranging in value from -2,147,483,648 to 2,147,483,647

        examples Dim count as long
                 Dim count&


CONCLUSION ::

1st declaration way must be :
        Dim tempSTR as string 
        Dim i as integer
        Dim TotalEuro as double
        Dim Total as single
        Dim count as long

2nd declaration way can be :
        Dim tempSTR$,i%,TotalEuro#,Total!,count&