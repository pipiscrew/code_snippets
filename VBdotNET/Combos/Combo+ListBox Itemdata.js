source : http://www.vbcity.com/forums/faq.asp?fid=15&cat=ListBox%2FComboBox#TID47804

Public Class Mylist 
Private sName As String 
' You can also declare this as String,bitmap or almost anything. 
' If you change this delcaration you will also need to change the Sub New 
' to reflect any change. Also the ItemData Property will need to be updated. 
Private iID As Integer 

' Default empty constructor. 
Public Sub New() 
sName = "" 
' This would need to be changed if you modified the declaration above. 
iID = 0 
End Sub 

Public Sub New(ByVal Name As String, ByVal ID As Integer) 
sName = Name 
iID = ID 
End Sub 

Public Property Name() As String 
Get 
Return sName 
End Get 
Set(ByVal sValue As String) 
sName = sValue 
End Set 
End Property 

' This is the property that holds the extra data. 
Public Property ItemData() As Int32 
Get 
Return iID 
End Get 
Set(ByVal iValue As Int32) 
iID = iValue 
End Set 
End Property 

' This is neccessary because the ListBox and ComboBox rely 
' on this method when determining the text to display. 
Public Overrides Function ToString() As String 
Return sName 
End Function 

End Class 



kai sthn forma :
' Add values to ComboBox1 using the mylist class and setting the itemData 

' Here we add multiple items with integer as your itemData 
With ComboBox1 
.Items.Add(New MyList("Goggle", 1)) 
.Items.Add(New MyList("Msdn", 2)) 
.Items.Add(New MyList("vbcity", 3)) 
.Items.Add(New MyList("dotnet", 4)) 
.SelectedIndex = 0 'Set first item as selected item. 
End With 

' The above is the same as this: 
Dim myListItem as MyList 
myListItem = New MyList("devCity", 5) 
' Add another Item to the ComboBox with the display being 
' "devCity" and the internal data being the integer 5. 
ComboBox1.Items.Add(myListItem) 

' The same goes for the listbox control 
' Listboxcontrol with ItemData set as integer 
With ListBox1 
.Items.Add(New MyList("Goggle", 1)) 
.Items.Add(New MyList("Msdn", 2)) 
.Items.Add(New MyList("vbcity", 3)) 
.Items.Add(New MyList("dotnet", 4)) 
.SelectedIndex = 0 'Set first item as selected item. 
End With 



OR

' Add a string to the itemData 
' Here we add multiple entries to a combobox with string datatype as your ItemData. 
With ComboBox1 
.Items.Add(New MyList("Goggle", "SearchWebSite")) 
.Items.Add(New MyList("Msdn", "CodeHelpSite")) 
.Items.Add(New MyList("vbcity", "GreatForum")) 
.Items.Add(New MyList("dotnet", "dontnetWeb")) 
.SelectedIndex = 0 'Set first item as selected item. 
End With 

' Listbox control with ItemData set as string 
With Listbox1 
.Items.Add(New MyList("Goggle", "SearchWebSite")) 
.Items.Add(New MyList("Msdn", "CodeHelpSite")) 
.Items.Add(New MyList("vbcity", "GreatForum")) 
.Items.Add(New MyList("dotnet", "dontnetWeb")) 
.SelectedIndex = 0 'Set first item as selected item. 
End With 

' But don't forget if you are going to use string as your 
' ItemData Declare Private iID As String not integer 


OR

' Now to retrieve our ItemData from Listbox/combobox 
' Combobox ItemData retrival 
' Declaration to obtain the object stored in the control's items collection. 
Dim mList As MyList 

' Get the selected item. 
mList = ComboBox1.Items(ComboBox1.SelectedIndex) 

' In the following statement, you can either use mList.ToString or 
' mList.Name. They both return the Name property. 
' Display the ItemData and Name properties. 
Label1.Text = Convert.ToString(mList.ItemData) & " " & mList.Name 

' Alternately, you can use the following syntax. 
Label1.Text = ComboBox1.Items(ComboBox1.SelectedIndex).ItemData _ 
& " " & ComboBox1.Items(ComboBox1.SelectedIndex).ToString 


' ListBox ItemData Retrieval 
' Declaration to obtain the object stored in the control's items collection. 
Dim mList As MyList 

' Get the selected item. 
mList =Listbox1.Items(Listbox1.SelectedIndex) 

' In the following statement, you can either use mList.ToString or 
' mList.Name. They both return the Name property. 
' Display the ItemData and Name properties. 
Label1.Text = mList.ItemData & " " & mList.Name 

' Alternately, you can use the following syntax. 
Label1.Text = Listbox1.Items(Listbox1.SelectedIndex).ItemData _ 
& " " & listbox1.Items(Listbox1.SelectedIndex).ToString 