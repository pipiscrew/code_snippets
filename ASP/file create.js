//http://www.freevbcode.com/ShowCode.asp?ID=89

//the pss.txt created by hand at first
	
Dim tmp
tmp = vbCrLf & "*******" & vbCrLf
tmp = tmp & Request.Form("OrderIds")
tmp = tmp & vbCrLf & "*******" & vbCrLf

Call WriteToFile("C:\pss.txt",tmp,true)

	
function WriteToFile(FileName, Contents, Append)
	on error resume next
	
	if Append = true then
	   iMode = 8
	else 
	   iMode = 2
	end if
	set oFs = server.createobject("Scripting.FileSystemObject")
	set oTextFile = oFs.OpenTextFile(FileName, iMode, True)
	oTextFile.Write Contents
	oTextFile.Close
	set oTextFile = nothing
	set oFS = nothing

end function