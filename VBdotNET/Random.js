'Once the class has been instantiated, 
'a random integer can be obtained by calling 
'the Next method of the Random class:

Dim RandomClass As New Random()
Dim RandomNumber As Integer
RandomNumber = RandomClass.Next()

'to create a random number within a certain size range
'RandomNumber to a value that is 
'greater or equal to 4 and less than 14:
Dim RandomClass As New Random()
Dim RandomNumber As Integer
RandomNumber = RandomClass.Next(4, 14)

'The following will return a return a random integer
' that is greater or equal to 0 and less than 14
Dim RandomClass As New Random()
Dim RandomNumber As Integer
RandomNumber = RandomClass.Next(14)



'the Random class can also return floating point numbers.
'The NextDouble method returns a random number as a Double.
'The random number's value is always greater or equal to 0.0,
' and less than 1.0:

Dim RandomClass As New Random()
Dim RandomNumber As Double
RandomNumber = RandomClass.NextDouble()




'--------------------------------
otan einai se loopa deinei synexeia to idio noymero
solved @:

Module GeneralMOD


    Public rn As New Random(Now.Millisecond)

    Public Function RealRandom() As Integer
        Return rn.Next(5000, 10000)
    End Function



End Module