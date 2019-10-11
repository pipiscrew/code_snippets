//public var
private ProgressDialog progress;

//start
progress = ProgressDialog.show(this, "Contests", "Activating Competition, please wait..", true);

//end
if (progress != null)
						progress.dismiss();