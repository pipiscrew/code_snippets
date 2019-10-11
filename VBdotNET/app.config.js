***den mporoyme na grapsoyme***
        
        Dim configurationAppSettings As System.Configuration.AppSettingsReader = New System.Configuration.AppSettingsReader

        Try
            MsgBox(configurationAppSettings.GetValue("MainConnection", GetType(System.String)))

        Catch ex As Exception
            MsgBox("Error: " & ex.Source & ": " & ex.Message, MsgBoxStyle.OkOnly, "??????")
        End Try
        
        
        kai exoyme kanei include sto project ena file App.Config me domh
<?xml version="1.0" encoding="windows-1253"?>
<configuration>
  <appSettings>
    <add key="MainConnection" value="Data Source=TMS-SERVER;Initial Catalog=TMS;USER ID=sa;PASSWORD=meth19375" />
    <add key="ImagesPath" value="C:\TMS_FILES\CAPTURE\" />
    <add key="BackupPath" value="\\TMS-SERVER\tms files\Backup SQL\" />
    <add key="AppointmentsReportDays" value="30" />
    <add key="DocumentTemplatesPath" value="Z:\TMS_FILES\TEMPLATES\" />
    <add key="DocumentsPath" value="Z:\TMS_FILES\DOCS\" />
    <add key="ReportsPath" value="C:\PROGRAM FILES\TMS MEDICAL VISION\REPORTS\" />
    <add key="AutoPatientsList" value="1" />
    <add key="BuDB" value="TMS" />
    <add key="TreeViewState" value="1" />
    <add key="Locale" value="el-GR" />
    <add key="UltraDataSource1.AllowAdd" value="True" />
    <add key="UltraDataSource1.AllowDelete" value="True" />
  </appSettings>
</configuration>