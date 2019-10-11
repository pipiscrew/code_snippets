    Private Sub Form_QueryUnload(Cancel As Integer, _
        UnloadMode As Integer)

    ' ---------------------------------------------------
    ' Cancel default is zero.  Setting Cancel to
    ' a non-zero value will stop all forms from unloading.
    ' ---------------------------------------------------

    ' ---------------------------------------------------
    ' Based on the the UnloadMode code
    ' the system passes, we determine what to do.
    ' Place your specific code under the
    ' appropriate case statement.
    ' ---------------------------------------------------

    Select Case UnloadMode
            Case 0:
                ' User used the Control Box Menu in the upper
                ' left corner or the "X" in the upper right
                ' corner of the form.  If this is one of many
                ' forms, I send it back to the form that called it.
                ' One way in, one way out.

            Case 1:
                ' Some other code within this application is causing
                ' the shutdown.  Usually a routine in a BAS module.

            Case 2:
                ' Windows session is closing (i.e. Start, Shut Down)

            Case 3:
                ' Task Manager is closing this application.  (i.e.
                ' Ctrl+Alt+Del, End Task)

            Case 4:
                ' The MDI parent form is closing.

        End Select
    End Sub
