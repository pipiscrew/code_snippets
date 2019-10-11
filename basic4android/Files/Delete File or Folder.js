//simple
File.Delete(File.DirRootExternal,"test.jpg")

//del a folder
 		Dim List1 As List
		Dim i As Int 
		
		List1.Initialize 
		List1= File.ListFiles(File.DirRootExternal & "/prodIMG")
		
		For i = 0 To List1.Size-1
			File.Delete(General.AppPath & "/prodIMG",List1.Get(i))
		Next 
		
		
		File.Delete(File.DirRootExternal,"prodIMG")
		