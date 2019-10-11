//http://www.west-wind.com/weblog/posts/2007/Nov/28/Detecting-Text-Encoding-for-StreamReader

I keep running into issues in regards to auto-detection of file types when using StreamReader. StreamReader supports byte order mark detection and in most cases that seems to be working Ok, but if you deal with a variety of different file encodings for input files using the default detection comes up short.

I posted a JavaScript Minifier application yesterday and somebody correctly pointed out that the text encoding was incorrect. It turns out part of the problem is the code I snatched from Douglas Crockford's original C# minifier code, but there's also an issue with some of the code I added to provide string translations.

StreamReader() specifically has an overload that's supposed to help with detection of byte order marks and based on that is supposed to sniff the document's encoding. It actually works but only if the content is encoded as UTF-8/16/32 - ie. when it actually has a byte order mark. It doesn't revert back to Encoding.Default if it can't find a byte order mark - the default without a byte order mark is UTF-8 which usually will result in invalid text parsing. For my converter this translated into problems when the source JavaScript files were not encoded with UTF-8, but it worked fine with any of the UTF-xx encodings which is why I missed this.

There are a few other oddities. For example, Encoding.UTF8 is configured in such a way that when you write out to a StreamWriter it will always write out the Byte Order Mark unless you explicitly create a new instance with the constructor that disables it (ie. new UTF8Encoding(false)) which can really bite you if you're writing XML into an XMLWriter through a StreamWriter since Encoding.UTF8 is the default. HTTP output should never include a BOM - it's used only for files as content markers.

So anyway, every time I run into this I play around for a bit trying different encodings, usually combinations of Encoding.Default, Encoding.UTF8 and Encoding.Unicode, none of which really work consistently in all cases. What's really needed is some way to sniff the Byte Order Marks and depending on which one is present apply the appropriate Encoding to the StreamReader's constructor.

I ended up creating a short routine that tries to sniff the file's type which looks like this since I couldn't find anything in the framework that does this:

/// <summary>
/// Detects the byte order mark of a file and returns
/// an appropriate encoding for the file.
/// </summary>
/// <param name="srcFile"></param>
/// <returns></returns>
public static Encoding GetFileEncoding(string srcFile)
{
    // *** Use Default of Encoding.Default (Ansi CodePage)
    Encoding enc = Encoding.Default;
 
    // *** Detect byte order mark if any - otherwise assume default
    byte[] buffer = new byte[5];
    FileStream file = new FileStream(srcFile, FileMode.Open);
    file.Read(buffer, 0, 5);
    file.Close();
 
    if (buffer[0] == 0xef && buffer[1] == 0xbb && buffer[2] == 0xbf)
        enc = Encoding.UTF8;
    else if (buffer[0] == 0xfe && buffer[1] == 0xff)
        enc = Encoding.Unicode;
    else if (buffer[0] == 0 && buffer[1] == 0 && buffer[2] == 0xfe && buffer[3] == 0xff)
        enc = Encoding.UTF32;
    else if (buffer[0] == 0x2b && buffer[1] == 0x2f && buffer[2] == 0x76)
        enc = Encoding.UTF7;
 
    return enc;
}
 
/// <summary>
/// Opens a stream reader with the appropriate text encoding applied.
/// </summary>
/// <param name="srcFile"></param>
public static StreamReader OpenStreamReaderWithEncoding(string srcFile)
{
    Encoding enc = GetFileEncoding(srcFile);
    return new StreamReader(srcFile, enc);
}
This seems to do the trick with various different types of encodings I threw at it. The file to file conversion uses a StringReader for input and StringWriter for output which looks like this:

/// <summary>
/// Minifies a source file into a target file.
/// </summary>
/// <param name="src"></param>
/// <param name="dst"></param>
public void Minify(string srcFile, string dstFile)
{           
    Encoding enc = StringUtilities.GetFileEncoding(srcFile);
 
    using (sr = new StreamReader(srcFile,enc))
    {
        using (sw = new StreamWriter(dstFile,false,enc))
        {
            jsmin();
        }
    }
}
This detects the original encoding and opens the input file and then writes the output back with the same encoding which is what you'd expect. The only thing here is that if for some reason the file is UTF-8 (or 16/32) encoded and there's no BOM the default will revert - potentially incorrectly - to the Default Ansi encoding. I suppose that's reasonable since that's the most likely scenario for source code files generated with Microsoft tools anyway.

When dealing with string values only, it's best to use Unicode encoding. There's another little tweak I had to make to the minifier, which relates to the string processing which has a similar issue:

/// <summary>
/// Minifies an input JavaScript string and converts it to a compressed
/// JavaScript string.
/// </summary>
/// <param name="src"></param>
/// <returns></returns>
public string MinifyString(string src)
{                       
    MemoryStream srcStream = new MemoryStream(Encoding.Unicode.GetBytes(src));
    MemoryStream tgStream = new MemoryStream(8092);
 
    using (sr = new StreamReader(srcStream,Encoding.Unicode))
    {
        using (sw = new StreamWriter(tgStream,Encoding.Unicode))
        {
            jsmin();
        }
    }
 
    return Encoding.Unicode.GetString(tgStream.ToArray());
}
Notice that when using strings as input it's best to use Unicode encoding since in .NET strings are always Unicode (unless a specific encoding was applied). The original code I used skipped the Encoding.Unicode on the Reader and Writer which also caused formatting issues with extended characters.

Encodings are a confusing topic even once you get your head around how encodings relate to the binary signature (the actual bytes) of your text. This is especially true for streams in .NET because many of the text based streams already apply default encodings and because streams are often passed to other components that also expose Encodings (like an XmlReader for example).

Hopefully a routine like the above (and this entry <g>) will jog my memory 'next time'.


Posted in .NET  CSharp  