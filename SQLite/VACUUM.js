//just execute
vaccum

---


//http://tutlane.com/tutorial/sqlite/sqlite-vacuum

//By default in SQLite auto_vacuum feature is disabled we need to enable it manually. In SQLite we have three modes: NONE (the default), FULL and INCREMENTAL to enable auto_vacuum based on our requirements.

FULL – If we set this it property means after each transaction SQLite moves freed pages to end of the file and truncates them. 
 
NONE – It is used to disable the auto_vacuum mode and its default mode.
 
INCREMENTAL – In this mode, the reference data is maintained but free pages are not swapped or released.


The following statement enables full auto-vacuum mode.
 
PRAGMA auto_vacuum = FULL;
To enable incremental vacuum, you can use the following statement.
 
PRAGMA auto_vacuum = INCREMENTAL;
The following statement disables auto-vacuum mode.
 
PRAGMA auto_vacuum = NONE;