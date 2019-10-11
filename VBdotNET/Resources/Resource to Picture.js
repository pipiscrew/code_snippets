                Dim _assembly As Reflection.Assembly = Reflection.Assembly.GetExecutingAssembly()
                Dim _imageStream As IO.Stream
                _imageStream = _assembly.GetManifestResourceStream("TestdriveNET." & currentRow("QPhoto") & ".jpg")
                PictureBox1.Image = New Bitmap(_imageStream)
                'OR Dim theDefaultImage As New Bitmap(_imageStream)
                
                
must set resource property Build Action = "embedded"
prosoxh to filecase otan to fwnazeis paizei rolo! 