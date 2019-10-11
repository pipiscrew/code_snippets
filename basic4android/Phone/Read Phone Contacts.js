//http://www.basic4ppc.com/forum/basic4android-updates-questions/18229-how-return-just-mobile-number-name-2.html

Sub getcontacts
    Dim Contacts2 As Contacts2
    Dim listOfContacts As List
    listOfContacts = Contacts2.GetAll(True,False)

    For i = 0 To listOfContacts.Size - 1
        Dim Contact As Contact
        Contact = listOfContacts.Get(i)
        
        
       ' Log("New " & Contact) 'will print the fields to the LogCat
'     
        Dim phones As Map
        phones = Contact.GetPhones
    
        If phones.Size > 0 Then 
             Dim PhoneNum, Phonemob As String 'Holds the result
             For x = 0 To phones.Size - 1
              PhoneNum = phones.GetkeyAt(x)
            '  Phonemob = phones.GetvalueAt(x)
              PhoneNum = PhoneNum.Replace(" ", "")
          If PhoneNum.Length > 7 Then
          
lvphone.SingleLineLayout.Label.TextSize = 15
lvphone.SingleLineLayout.Label.TextColor = Colors.Black
lvphone.SingleLineLayout.ItemHeight = 40
lvphone.ScrollingBackgroundColor =Colors.Transparent
lvphone.AddSingleLine(Contact.DisplayName &": " & PhoneNum)               
                      Log("PhoneNum " & PhoneNum & " "  & Contact.DisplayName)

               End If
            Next
        End If
    
    Next


End Sub