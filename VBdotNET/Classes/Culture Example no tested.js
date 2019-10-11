
'This code is applicable only before that the primari form (MDI) charge. In the form, you need to make various resources, one for each languaje. Go to language properti on MDI form, select the language that you need aplicate, and then, you make 1 resource. In this point, change all controls text in the language that you select.

'When your finish, select again other language, and make the same process again. For each language, one resource


Public Sub New()
        'Get the language from settings for example:
        'You can get info of CultureInfo Class con MSDN or on 'http://www1.cs.columbia.edu/~lok/csharp/refdocs/System.Globalization/types/CultureInfo.html 

        Dim lLng As String = My.Settings.Languaje 'es-Es for example

        Threading.Thread.CurrentThread.CurrentCulture = New CultureInfo(lLng)
        Threading.Thread.CurrentThread.CurrentUICulture = New CultureInfo(lLng)

        ' This call is required by the Windows Form Designer.
        InitializeComponent()

        Me.IsMdiContainer = True

        Initialice()

    End Sub