function InitializeSetup(): Boolean;
	var
		Response: Integer;
		PrevDir: String;
		InstalledVersion: String;
		InstalledCurrentVersion: String;
		VersionError: String;
	begin
		Result := true;

		// read the installtion folder
		PrevDir := GetPathInstalled(getAppID(''));

		if length(Prevdir) > 0 then begin
			// I found the folder so it's an upgrade
			InstalledVersion := GetInstalledVersion();
			// compare versions
			if InstalledVersion = GetAppMajorVersion('') then begin
				InstalledCurrentVersion := GetInstalledCurrentVersion();
				if (InstalledCurrentVersion < GetAppCurrentVersion('')) then begin
					Result := True;
				end else if (InstalledCurrentVersion = GetAppCurrentVersion('')) then begin
					Response := MsgBox(
						'It appears that the existing AgileTrack installation is already current.' + #13#13 +
						'Do you want to continue with the update installation?', mbError, MB_YESNO
					);
					Result := (Response = IDYES);
				end else begin
					Response := MsgBox(
						'It appears that the existing AgileTrack installation newer than this update.' + #13#13 +
						'The existing installation is build '+ InstalledCurrentVersion +'.  This update will change the installation to build '+ GetAppCurrentVersion('') + #13#13 +
						'Do you want to continue with the update installation?', mbError, MB_YESNO
					);
					Result := (Response = IDYES);
				end;
			end else begin
				if length(InstalledVersion) = 0 then begin
					VersionError := 'Setup was unable to determine the version of the existing AgileTrack installation.';
				end else begin
					VersionError := 'Setup has detected an installation of AgileTrack ' + InstalledVersion + '.';
				end;
				MsgBox(
					VersionError + #13#13 +
					'This update installer requires AgileTrack ' + GetAppMajorVersion('') +' to ' +
					'already be installed.' + #13 + 'Please install AgileTrack ' + GetAppMajorVersion('') +' before running this update.' + #13#13 +
					'Setup/Upgrade aborted.', mbError, MB_OK
				);
				Result := false;
			end;
		end else begin
			MsgBox(
				'This update installer requires an existing installation of AgileTrack ' + GetAppMajorVersion('') +' to ' +
				'already be installed.' + #13 + 'Please install AgileTrack ' + GetAppMajorVersion('') +' before running this update.' + #13#13 +
				'Setup/Upgrade aborted.', mbError, MB_OK
			);
			Result := false;
		end;
  end;