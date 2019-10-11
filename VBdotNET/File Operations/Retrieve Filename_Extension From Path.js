curreFolderName = Mid(dra.FullName.ToString, InStrRev(dra.FullName.ToString, "\") + 1)



System.IO.Path.GetFileName(sourcFilepath)



System.IO.Path.GetFileNameWithoutExtension(fl)
ex. 'takis.mp3.il' 
8a gyrisei 'takis.mp3'

ex. 'takis.mp3' 
8a gyrisei 'takis'



System.IO.Path.GetExtension(flwithoutEXT)
ex. 'takis.mp3.il' 
8a gyrisei '.il'

ex. 'takis' 
8a gyrisei ''