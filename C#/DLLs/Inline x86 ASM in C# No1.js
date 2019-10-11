//http://www.atrevido.net/blog/CommentView,guid,ac03f447-d487-45a6-8119-dc4fa1e932e1.aspx#commentstart

using System;
using System.Reflection;

class Program
{
    public delegate uint Ret1ArgDelegate(uint arg1);
    static uint PlaceHolder1(uint arg1) { return 0; }
    
    public static byte[] asmBytes = new byte[]
        {        
0x89,0xD0, // MOV EAX,EDX
0xD1,0xC8, // ROR EAX,1
0xC3       // RET
        };
        
    unsafe static void Main(string[] args)
    {
        fixed(byte* startAddress = &asmBytes[0]) // Take the address of our x86 code
        {
            // Get the FieldInfo for "_methodPtr"
            Type delType = typeof(Delegate);
            FieldInfo _methodPtr = delType.GetField("_methodPtr", BindingFlags.NonPublic | BindingFlags.Instance);

            // Set our delegate to our x86 code
            Ret1ArgDelegate del = new Ret1ArgDelegate(PlaceHolder1);
            _methodPtr.SetValue(del, (IntPtr)startAddress);

            // Enjoy
            uint n = (uint)0xFFFFFFFC;
            n = del(n);
            Console.WriteLine("{0:x}", n);
        }
    }
}



One thing I had done before and decided to try again was inline (embedded? inline isn't the right term exactly) ASM with C#. Remember, the CLR JITs your IL code down to native code when it runs. There's no interpreter or likewise going on -- your C# code is x86 when it runs (on an x86 platform). However, when writing in C#, it's rather hard to get out to x86 directly. Probably the easiest way would be to use Managed C++ and an inline asm section there. But, if you want to keep it all in C# (say, you want something extra hard to decompile), you can achieve that.

[I must note, the more I learn of internals, the more I learn I need to learn more. Thus hopefully, some true expert will read this and give me more insight.]

The most straightforward way that occurred to me was to use a delegate. As far as I know, C# won't issue calli and ldftn IL opcodes for us in any way we can neatly control. There will be ldftn when a delegate is created, but we can't set that value directly. So instead, we'll create a delegate and modify it. Delegates have a private field named “_methodPtr”. This, as far as I can tell, points to the code to be executed by the delegate. It's important that our delegate is accurate regarding the number of parameters, and the return value.

We will store our x86 in a byte array. Then, we'll pin the array, and stick the address of the first element inside the delegate. When we call the delegate, everything will be set.

As far as I can tell, methods in the CLR use the fastcall convention, so the first two parameters will be in EDX and ECX. The return value is expected in EAX. My demo is going to be simple, performing a ROR (ROtate Right) by 1 on the parameter and returning that. 3 lines of ASM.

Compile with /unsafe obviously, else I'd be writing to secure@microsoft.com. I'm not sure how terribly useful this is, but it seemed cool to me. At the very minimum, it serves to tell people to STFU when they claim that C# / .NET can't do pointers, or raw code, or whatever.
