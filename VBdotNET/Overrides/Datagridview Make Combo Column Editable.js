'source :: http://social.msdn.microsoft.com/Forums/en-US/vbpowerpacks/thread/cfc84be2-d833-435c-9b40-683d79f3e99f/

Public Class DataGridViewComboEditBoxCell

    Inherits DataGridViewComboBoxCell

 

    Public Overrides Sub InitializeEditingControl(ByVal rowIndex As Integer, ByVal initialFormattedValue As Object, ByVal dataGridViewCellStyle As DataGridViewCellStyle)

        MyBase.InitializeEditingControl(rowIndex, initialFormattedValue, dataGridViewCellStyle)

 

        Dim comboBox As ComboBox = MyBase.DataGridView.EditingControl '

        If Not (comboBox Is Nothing) Then

            comboBox.DropDownStyle = ComboBoxStyle.DropDown

        End If

    End Sub 'InitializeEditingControl

 

    Protected Overrides Function GetFormattedValue(ByVal value As Object, ByVal rowIndex As Integer, ByRef cellStyle As DataGridViewCellStyle, ByVal valueTypeConverter As TypeConverter, ByVal formattedValueTypeConverter As TypeConverter, ByVal context As DataGridViewDataErrorContexts) As Object

        'add your own logic here

        If Not (value Is Nothing) Then

            If value.ToString().Trim() <> String.Empty Then

                If Items.IndexOf(value) = -1 Then

                    Items.Add(value)

                    Dim col As DataGridViewComboBoxColumn = OwningColumn '

                    col.Items.Add(value)

                End If

            End If

        End If

        Return MyBase.GetFormattedValue(value, rowIndex, cellStyle, valueTypeConverter, formattedValueTypeConverter, context)

    End Function 'GetFormattedValue

End Class 'DataGridViewComboEditBoxCell

 

Public Class DataGridViewComboEditBoxColumn

    Inherits DataGridViewComboBoxColumn

 

    Public Sub New()

        Dim obj As New DataGridViewComboEditBoxCell()

        Me.CellTemplate = obj

    End Sub 'New

End Class 'DataGridViewComboEditBoxColumn