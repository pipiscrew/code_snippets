'**************************************
' Name: Classes In VBScript
' Description:This code will allow you t
'     o use classes in VBSccript versions 5.0 
'     and higher
' By: Alex Karpman
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=27759&lngWId=1
'for details.
'**************************************

'Declare and define a class using the Cl
'     ass statement:
Class cls
        'Private variable To store data:
        Private m_Prop1
        
        'Propety Prop1:
        'Peoperty Let executes when setting the Property
        Public Property Let Prop1(ByVal newVal)
                m_Prop1 = newVal
        End Propertya
        
        'Property Get executes when reading it
        Public Property Get Prop1()
                Prop1 = m_Prop1
        End Property
        
        'If the Type of the Property was class type (and Not primitive type) we'd use Property Set instead of Property Get. Property Let souldn't change.
        
        'Property Prop2:
        'Just a Public memeber
        'Can't Do range-check, or execute code of any kind
        Public Prop2
        
        'Declare and define methods just as you'd write normal functions:'Method F
        Sub foo(msg)
                MsgBox msg
        End Sub
'End the Class statement
End Class


Sub Main()
            'make o a "New cls", like In VB5/6
            Dim o
            Set o = New cls
            
            'Call a method
            o.foo "my message!"
            
            o.Prop1 = "hello"
            o.Prop2 = "world"
            MsgBox o.Prop1 & " " & o.Prop2 & "!"
End Sub


