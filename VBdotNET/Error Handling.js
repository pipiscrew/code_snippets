   Try 
     'Encapsulates a block of code that may produce a run-time error.
   Catch [Optional Filters]
     'The code runs if any of the statements in the Try block fails and filter is evaluated as true.
   [Additional Catch Blocks]
   Finally
     'Code executed after Try and Catch statement.
   End Try



        Try

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try

to error number einai ex.GetHashCode 