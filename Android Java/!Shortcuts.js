**android studio**
CTRL+B - goto definition
CTRL+Q - go back
CTRL+ALT+Lcursor / Rcursor - back / forward
CTRL+A+L - Format Code

**eclipse**
New Layout File
	Go to file - new - other - Android - android XML Layout

Format Code
	CTRL+A (selects all code)
	CTRL+I (to indent it)
	CTRL+F (to format it) - default format the code on 80cols, to adjust :
							1. Go to the Windows -> Preferences.
							2. in Preferences window, navigate to Java -> Code Style -> Formatter.
							Here you have a built-in formatter provided by Eclipse. 
							If needed, you can create your own formatting configurations.
							4. goto Line Wrapping set maximum line width = 180

Organize Imports 
	CTRL + SHIFT + O
	
Method Comments
		when cursor is in a method press SHIFT+ALT+J
			/**
			 * @param baseContext
			 * @param filepath
			 * @return
			 */
		will appear
		
Extract String to strings.xml
		In the Eclipse main menu, go to
		
		Refactor -> Android -> Extract Android String…
		
		OR You could also use the keyboard shortcut: First press Shift + Alt + A, then press S

on activity :
getString(R.string.authenticated)

on adapter :
context.getResources().getString(R.string.authenticated)