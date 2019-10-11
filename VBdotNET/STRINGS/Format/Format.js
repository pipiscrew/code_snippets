Dim intNumber As Integer = 12345
Console.WriteLine(intNumber.ToString("D10"))



we got :
0000012345




    Dim theDecNumber As Decimal = 12345.678


    Console.WriteLine("Standard Formats" + vbCrLf)
    Console.WriteLine("Currency formatting: " + theDecNumber.ToString("C"))
    Console.WriteLine("Exponential formatting: " + theDecNumber.ToString("E"))
    Console.WriteLine("Fixed-point formatting: " + theDecNumber.ToString("F2"))
    Console.WriteLine("General formatting: " + theDecNumber.ToString("G"))
    Console.WriteLine("Number formatting to 2 decimal places: " + theDecNumber.ToString("N2"))
    Console.WriteLine("Number formatting to 3 decimal places: " + theDecNumber.ToString("N3"))
    Console.WriteLine("Number formatting to 4 decimal places: " + theDecNumber.ToString("N4"))
    Console.WriteLine("Percent formatting: " + theDecNumber.ToString("P0"))


    'Converting an Integer to Hexidecimal using the ToString method
    Dim theIntNumber As Integer = 123456
    Console.WriteLine("Hexidecimal formatting (for integers): {0} = {1}", theIntNumber, theIntNumber.ToString("X"))

    'Demonstrate using custom formatting
    Dim theDblNumber As Double = 1234567890
    Console.WriteLine("Custom formatting: {0} to US telephone {1}", theDblNumber, theDblNumber.ToString("(###) ### - ####"))
