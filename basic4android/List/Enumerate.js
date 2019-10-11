	Dim List1 As List
	Dim i As Int 
	
	List1.Initialize 
	List1= File.ListFiles(General.AppPath & "/prodIMG")
	
	For i = 0 To List1.Size-1
		File.Delete(General.AppPath & "/prodIMG",List1.Get(i))
	Next 