	
	Dim recDetails As List 

	recDetails.Initialize
	recDetails.Add(txtTitle.Text )
	recDetails.Add(txtDescription.Text )
	recDetails.Add(General.GetByteFromBitmap(img.Bitmap))
	recDetails.Add(txtTel.Text)
	recDetails.Add(txtEmail.Text)
	recDetails.Add(txtSite.Text)
	recDetails.Add(txtServerIP.Text)
	recDetails.Add(txtPassword.Text)
	recDetails.Add(chkGR.Checked)
	recDetails.Add(chkENG.Checked)
	recDetails.Add(chkITAL.Checked)
	recDetails.Add(chkFR.Checked)
	recDetails.Add(chkRUSS.Checked)
	recDetails.Add(chkGERM.Checked)
	recDetails.Add(chkSERV.Checked)
	recDetails.Add(chkCHIN.Checked)
		
		
	If count = "0" Then
	'add new
	

		
		General.SQL1.ExecNonQuery2("INSERT INTO  Settings (" & _
									"[Title]," & _
									"[Description]," & _
									"[Picture]," & _
									"[Telephone]," & _
									"[Email]," & _
									"[Site]," & _
									"[ServerIP]," & _
									"[Password]," & _
									"[Lang1GR]," & _
									"[Lang2ENG]," & _
									"[Lang3ITAL]," & _
									"[Lang4FR]," & _
									"[Lang5RUSS]," & _
									"[Lang6GERM]," & _
									"[Lang7SERV]," & _
									"[Lang8CHIN]) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",recDetails )
		Activity.Finish
	Else
	'update
		General.SQL1.ExecNonQuery2("UPDATE Settings SET " & _
									"[Title]=?," & _
									"[Description]=?," & _
									"[Picture]=?," & _
									"[Telephone]=?," & _
									"[Email]=?," & _
									"[Site]=?," & _
									"[ServerIP]=?," & _
									"[Password]=?," & _
									"[Lang1GR]=?," & _
									"[Lang2ENG]=?," & _
									"[Lang3ITAL]=?," & _
									"[Lang4FR]=?," & _
									"[Lang5RUSS]=?," & _
									"[Lang6GERM]=?," & _
									"[Lang7SERV]=?," & _
									"[Lang8CHIN]=?",recDetails )
	End If 