'http://devcity.net/Articles/60/1/unhandled_exceptions.aspx

'Using the current Application Domain you can catch any error
'that occurs outside of a Try-Catch block. 
'An application domain is an isolated environment 
'where an application executes. Application domains
'provide isolation, unloading, and security boundaries 
'for executing managed code


   ' Get the your application's application domain.
   Dim currentDomain As AppDomain = AppDomain.CurrentDomain 

   ' Define a handler for unhandled exceptions.
   AddHandler currentDomain.UnhandledException, AddressOf MYExHandler 

   ' Define a handler for unhandled exceptions for threads behind forms.
   AddHandler Application.ThreadException, AddressOf MYThreadHandler 

   Private Sub MYExnHandler(ByVal sender As Object, _
       ByVal e As UnhandledExceptionEventArgs) 
         Dim EX As Exception 
         EX = e.ExceptionObject 
         Console.WriteLine(EX.StackTrace) 
   End Sub 

   Private Sub MYThreadHandler(ByVal sender As Object, _
     ByVal e As Threading.ThreadExceptionEventArgs) 
      Console.WriteLine(e.Exception.StackTrace) 
   End Sub

   ' This code will throw an exception and will be caught.
   Dim X as Integer = 5
   X = X / 0 'throws exception will be caught by subs below
