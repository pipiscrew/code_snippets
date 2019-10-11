1way ::
'create MDB
Dim cat As Catalog

Set cat = New Catalog

cat.Create ("Provider=Microsoft.Jet.OLEDB.4.0;" & _
           "Data Source=" & App.Path & "\NewMDB.mdb;" & _
           "Jet OLEDB:Engine Type=5")

Set cat = Nothing
'create MDB

2 way::
Dim ws As Workspace
Dim db As Database

Set ws = DBEngine.Workspaces(0) 'set up a new workspace
Set db = ws.CreateDatabase("C:\db1.mdb", dbLangGeneral) 'create database from workspace