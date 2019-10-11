Then select 'Resource Editor' from the 'Tools' menu. You need to add the files as custom resources in the Editor.
Click on the 'Custom' resource button (the second but last button on the toolbar) and find the first file. The editor will place the resource in the folder "CUSTOM" and give it an identifier (starting 101).
You can either leave the type as "CUSTOM" or click on the resource number, select 'Properties' and type a new name e.g. TEXTFILE
Repeat the process for each file.
Click the save button.

The following code will extract a resource and put it in a TextBox:

Code:
Text1.Text = StrConv(LoadResData(101, "CUSTOM"), vbUnicode)

The '101' identifies the resource number, "CUSTOM" identifies the type of data. If you change the resource type in the editor to "TEXTFILE" you need to change it in the code.
