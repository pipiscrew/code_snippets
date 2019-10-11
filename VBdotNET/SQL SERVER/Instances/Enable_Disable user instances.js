'http://msdn.microsoft.com/en-us/library/ms254504.aspx

-- Enable user instances.
sp_configure 'user instances enabled','1' 

-- Disable user instances.
sp_configure 'user instances enabled','0'


then
execute ->
Reconfigure (F5)

restart sql