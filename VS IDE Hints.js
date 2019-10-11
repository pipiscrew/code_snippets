**From start/end bracket**
	Shortcut 
		Click menu Tools -> Options -> Environment -> Keyboard. Then look for Edit.GotoBrace.
	
	Color
		Goto Tools > Options > Environment > Fonts and Colors, select the "Brace Matching (Rectangle)" and change the "Item Background" to e.g. Yellow. This worked for the C# parentheses () {} and [].
		

**For HTML tag**
	For HTML (http://stackoverflow.com/a/10763916/1320686):
	If you want to go starting matching HTML tag, then follow below steps.
	
	Place cursor at ending matching HTML tag.
	Press Ctrl+M+M [To Collapse entire tag]
	Press Home Key [To place cursor at before starting tag]
	Press Ctrl+M+M [To Expand entire tag]
	If you want to go ending matching HTML tag, then follow below steps.
	
	Place cursor at starting matching HTML tag.
	Press Ctrl+M+M [To Collapse entire tag]
	Press End Key [To place cursor next to ending tag]
	Press Ctrl+M+M [To Expand entire tag]

---------------------------------------.

VS 2010 too slow?
	This is a very quick tip for anyone who, like me, has found Visual Studio 2010 to be painfully slow.
	
	Go to
	Tools ==> Options ==> Environment ==> General ==> Visual Experience
	
	Then UNTICK
	Automatically adjust visual experience based on client performance
	
	And UNTICK
	Use graphics hardware acceleration if available



VS2010 - The option for auto-sync is:

Tools|Options|Projects and Solutions|General|Track Active Item in Solution Explorer

VS2010 - Auto syntax :
CTRL-E > CTRL-D

VS2010 - From Start Bracket to End Bracket
CTRL-}
----------------------------------------------------
//http://blogs.msdn.com/b/calvin_hsia/archive/2011/12/20/10249731.aspx
Disassembly on VSIDE 2010
on a breakpoint Hit Ctrl-F11 (Disassembly):

--
XML description header
//export2xml -- http://msdn.microsoft.com/en-us/library/aa288481%28VS.71%29.aspx
//csc XMLsample.cs /doc:XMLsample.xml
//tool http://submain.com/products/ghostdoc.aspx

//There are eleven support tags: <c>, <code>, <list>, <listheader>, <item>, <term>, <description>, <para>, <paramref>, <see>, and <value>.
//http://msdn.microsoft.com/en-us/magazine/cc302121.aspx

   
/// <summary>
/// Always returns 1
/// </summary>
private Int32 MyMethod()
{
    return 1;
}

   /// <summary>
   /// Description for SomeMethod.</summary>
   /// <param name="s"> Parameter description for s goes here</param>
   /// <seealso cref="String">
   /// You can use the cref attribute on any tag to reference a type or member 
   /// and the compiler will check that the reference exists. </seealso>
   public void SomeMethod(string s)
   {
   }
   
   
/// <summary>
/// Class level summary documentation goes here.</summary>
/// <remarks>
/// Longer comments can be associated with a type or member 
/// through the remarks tag</remarks>
public class SomeClass
{
}